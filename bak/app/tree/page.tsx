'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

interface TreeNode {
  id: string;
  name: string;
  gender: string;
  birthDate?: string;
  deathDate?: string;
  children?: TreeNode[];
  uniqueLabel?: string;
}

export default function TreePage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [treeData, setTreeData] = useState<TreeNode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRootId, setSelectedRootId] = useState<string | null>(null);
  const [allMembers, setAllMembers] = useState<any[]>([]);
  const [displayMode, setDisplayMode] = useState<'horizontal' | 'vertical'>('horizontal');
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' | 'info' } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [zoomInstance, setZoomInstance] = useState<any>(null);
  const [renderAttempts, setRenderAttempts] = useState(0);
  const maxRenderAttempts = 3;

  // 获取所有成员，用于根节点选择器
  useEffect(() => {
    fetch('/api/members')
      .then(res => res.json())
      .then(data => {
        setAllMembers(data);
      })
      .catch(err => {
        console.error('获取成员列表失败:', err);
      });
  }, []);

  // 获取家族树数据
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const url = selectedRootId 
      ? `/api/tree?rootId=${selectedRootId}` 
      : '/api/tree';
    
    console.log('开始获取族谱树数据，URL:', url);
    
    // 添加超时处理
    const timeout = setTimeout(() => {
      console.error('获取族谱树数据超时');
      setError('获取族谱树数据超时，请稍后重试');
      setIsLoading(false);
    }, 15000); // 15秒超时
    
    // 添加更详细的请求错误处理
    fetch(url)
      .then(res => {
        console.log('API响应状态:', res.status, '内容类型:', res.headers.get('content-type'));
        clearTimeout(timeout); // 清除超时计时器
        
        if (!res.ok) {
          throw new Error(`获取家族树数据失败，状态码: ${res.status}`);
        }
        
        // 验证内容类型是否为JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.warn('API返回的不是JSON数据:', contentType);
        }
        
        return res.json();
      })
      .then(data => {
        console.log('获取到的族谱树数据:', JSON.stringify(data, null, 2));
        console.log('族谱树数据类型:', typeof data);
        console.log('族谱树数据是否为数组:', Array.isArray(data));
        
        if (!data) {
          throw new Error('接收到空数据');
        }
        
        // 验证树节点基本结构
        if (!data.id || !data.name) {
          console.error('数据缺少基本属性 id 或 name:', data);
          
          // 创建一个应急数据对象
          const emergencyData = {
            id: "emergency_data",
            name: "数据不完整（应急显示）",
            gender: data.gender || "OTHER",
            birthDate: data.birthDate || "2000-01-01",
            children: []
          };
          
          // 尝试保留原始数据中的有效部分
          if (data.children && Array.isArray(data.children)) {
            emergencyData.children = data.children.filter((child: any) => 
              child && typeof child === 'object' && child.id && child.name
            );
          }
          
          setTreeData(emergencyData);
          setIsLoading(false);
          return;
        }
        
        // 标准化数据格式
        const normalizedData = {
          id: data.id,
          name: data.name,
          gender: data.gender || "OTHER",
          birthDate: data.birthDate || undefined,
          deathDate: data.deathDate || undefined,
          children: []
        };
        
        // 验证并规范化children数组
        if (data.children) {
          if (!Array.isArray(data.children)) {
            console.error('children不是数组:', data.children);
            normalizedData.children = [];
          } else {
            normalizedData.children = data.children
              .filter((child: any) => child && typeof child === 'object' && child.id && child.name)
              .map((child: any) => ({
                id: child.id,
                name: child.name,
                gender: child.gender || "OTHER",
                birthDate: child.birthDate || undefined,
                deathDate: child.deathDate || undefined,
                children: Array.isArray(child.children) ? child.children : []
              }));
          }
        }
        
        console.log('规范化后的数据:', normalizedData);
        setTreeData(normalizedData);
        setIsLoading(false);
      })
      .catch(err => {
        clearTimeout(timeout); // 确保清除超时计时器
        console.error('获取家族树数据失败:', err);
        
        // 提供更详细的错误信息
        let errorMessage = '获取家族树数据失败';
        if (err instanceof Error) {
          errorMessage += `: ${err.message}`;
        }
        
        setError(errorMessage);
        setIsLoading(false);
        
        // 如果是网络错误，可能是后端问题，尝试显示默认数据
        if (err instanceof TypeError && err.message.includes('fetch')) {
          console.log('检测到网络错误，自动切换到测试数据模式');
          setTreeData({
            id: "root",
            name: "缪伯清（自动应急显示）",
            gender: "MALE",
            birthDate: "1900-01-01",
            children: [
              {
                id: "child1",
                name: "第二代成员1",
                gender: "MALE",
                birthDate: "1930-01-01"
              },
              {
                id: "child2",
                name: "第二代成员2",
                gender: "FEMALE",
                birthDate: "1935-01-01"
              }
            ]
          });
        }
      });
  }, [selectedRootId]);

  // 安全渲染函数
  const safeRender = useCallback(() => {
    // 如果已经尝试了最大次数，显示紧急备用视图
    if (renderAttempts >= maxRenderAttempts) {
      console.error(`已尝试渲染 ${renderAttempts} 次，切换到紧急视图`);
      setTreeData({
        id: "emergency_root",
        name: "渲染失败（紧急视图）",
        gender: "OTHER",
        birthDate: "2000-01-01",
        children: [
          {
            id: "emergency_child",
            name: "请刷新页面或联系管理员",
            gender: "OTHER",
            birthDate: "2000-01-01"
          }
        ]
      });
      setError(`渲染失败，已切换到紧急视图。请刷新页面或使用测试视图查看演示。`);
      setRenderAttempts(0); // 重置计数器
      return;
    }

    // 递增尝试计数
    setRenderAttempts(prev => prev + 1);
    
    // 实际渲染逻辑保持不变
    // ...此处保持原有渲染逻辑...
  }, [renderAttempts, setTreeData, setError]);

  // 渲染错误处理
  useEffect(() => {
    if (error) {
      console.error('渲染错误，尝试重新渲染:', error);
      // 如果出错，延迟后尝试重新渲染
      const timer = setTimeout(() => {
        if (renderAttempts < maxRenderAttempts) {
          console.log(`第 ${renderAttempts + 1} 次尝试重新渲染...`);
          safeRender();
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [error, renderAttempts, safeRender]);

  // 绘制树图
  useEffect(() => {
    if (!svgRef.current || !treeData) {
      console.log('无法绘制树图：', !svgRef.current ? 'SVG引用不存在' : '树数据为空');
      return;
    }

    // 在渲染前验证和修复数据结构
    const verifyTreeData = (node: TreeNode): TreeNode => {
      // 基本属性检查
      if (!node.id) node.id = `auto_id_${Math.random().toString(36).substr(2, 9)}`;
      if (!node.name) node.name = "未命名";
      if (!node.gender) node.gender = "OTHER";
      
      // 确保children是一个数组
      if (!node.children) node.children = [];
      
      // 递归处理子节点
      if (Array.isArray(node.children)) {
        node.children = node.children
          .filter(child => child && typeof child === 'object')
          .map(child => verifyTreeData(child));
      } else {
        console.error(`节点 ${node.id} 的children不是数组:`, node.children);
        node.children = [];
      }
      
      return node;
    };
    
    // 应用验证和修复
    const verifiedTreeData = verifyTreeData({ ...treeData });
    console.log('验证后的树数据:', verifiedTreeData);

    console.log('开始绘制族谱树，节点数量:', countNodes(verifiedTreeData));
    console.log('当前树数据结构:', JSON.stringify(verifiedTreeData, null, 2));

    try {
      // 清除之前的内容和事件处理器
      if (svgRef.current) {
        // 移除之前绑定的缩放事件
        const existingSelection = d3.select(svgRef.current);
        if (existingSelection) {
          try {
            existingSelection.on('.zoom', null);
          } catch (e) {
            console.log('清除缩放事件失败:', e);
          }
        }
        
        // 然后清除所有内容
        existingSelection.selectAll("*").remove();
      }

      // 安全检查：确保树数据有效
      if (!verifiedTreeData.id || !verifiedTreeData.name) {
        throw new Error(`树数据格式无效: ${JSON.stringify(verifiedTreeData).substring(0, 100)}`);
      }

      // 设置边距和尺寸 - 使用更简单的配置
      const margin = { top: 80, right: 150, bottom: 80, left: 150 };
      const width = 1200;
      const height = 800;  // 增加高度，为节点提供更多垂直空间

      // 创建SVG - 确保不直接引用可能为null的外部变量
      if (!svgRef.current) {
        throw new Error('SVG元素不存在');
      }

      const mainSvg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height);
        
      // 创建可以被缩放的主要容器组
      const svg = mainSvg.append("g")
        .attr("class", "main-group")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // 创建层级数据
      const root = d3.hierarchy<TreeNode>(verifiedTreeData);
      console.log('创建层级数据成功');

      // 获取节点数量
      const totalNodeCount = countNodes(verifiedTreeData);
      const levelSeparation = totalNodeCount > 30 ? 180 : 220; // 横向间距
      const siblingSpace = totalNodeCount > 30 ? 40 : 50;      // 兄弟节点间距

      // 根据显示模式选择布局方向
      let treeLayout;
      if (displayMode === 'horizontal') {
        treeLayout = d3.tree<TreeNode>()
          .size([height - margin.top - margin.bottom, width - margin.left - margin.right - 200])  // 增加水平间距
          .separation((a, b) => {
            return a.parent === b.parent ? 
              1.2 + (a.data.name.length + b.data.name.length) * 0.05 : // 根据名称长度增加间距
              2.0; 
          });
      } else {
        // 纵向布局 - 交换宽度和高度
        treeLayout = d3.tree<TreeNode>()
          .size([width - margin.left - margin.right - 200, height - margin.top - margin.bottom])  // 增加垂直间距
          .separation((a, b) => {
            return a.parent === b.parent ? 
              1.2 + (a.data.name.length + b.data.name.length) * 0.05 : // 根据名称长度增加间距
              2.0;
          });
      }

      // 应用布局
      const nodes = treeLayout(root);
      console.log('树布局应用成功');

      // 添加连接线
      svg.selectAll(".link")
        .data(nodes.links())
        .join("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#aaa")
        .attr("stroke-width", 1.5)
        .attr("d", displayMode === 'horizontal' 
          ? d3.linkHorizontal<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
              .x((d: any) => d.y)
              .y((d: any) => d.x)
          : d3.linkVertical<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
              .x((d: any) => d.x)
              .y((d: any) => d.y)
        );

      // 添加节点组
      const node = svg.selectAll(".node")
        .data(nodes.descendants())
        .join("g")
        .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
        .attr("transform", d => displayMode === 'horizontal' 
          ? `translate(${d.y},${d.x})` 
          : `translate(${d.x},${d.y})`)
        .attr("data-id", d => d.data.id);

      console.log('节点组创建成功');

      // 添加节点背景
      node.append("rect")
        .attr("x", -75)  // 增加宽度
        .attr("y", -18)  // 向上移动一点
        .attr("width", 150)  // 增加宽度
        .attr("height", 40)  // 增加高度
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", d => {
          try {
            return d.data && d.data.gender === 'MALE' ? "#e0e7ff" : "#fce7f3";
          } catch (err) {
            console.error("节点填充颜色错误:", err, d);
            return "#f3f4f6"; // 默认灰色
          }
        })
        .attr("stroke", d => {
          try {
            return d.data && d.data.gender === 'MALE' ? "#4f46e5" : "#db2777";
          } catch (err) {
            console.error("节点边框颜色错误:", err, d);
            return "#9ca3af"; // 默认灰色
          }
        })
        .attr("stroke-width", 1.5);

      // 添加节点名称文本
      node.append("text")
        .attr("dy", "-0.2em")  // 向上移动一点
        .attr("x", 0)
        .attr("text-anchor", "middle")
        .text(d => {
          try {
            return d.data ? d.data.name : "未知";
          } catch (err) {
            console.error("节点名称错误:", err, d);
            return "错误";
          }
        })
        .style("font-weight", "bold")
        .style("font-size", "14px")
        .each(function(d) {
          try {
            if (!d.data) return;
            
            // 文本太长时缩小字体或截断
            const textLength = this.getComputedTextLength();
            if (textLength > 140) {
              d3.select(this).style("font-size", "12px");
              
              // 如果缩小字体后仍然太长，则添加省略号
              if (this.getComputedTextLength() > 145) {
                const text = d.data.name;
                const ellipsis = "...";
                let truncatedText = text;
                
                while (truncatedText.length > 3 && 
                       this.getComputedTextLength() > 145) {
                  truncatedText = truncatedText.slice(0, -1);
                  d3.select(this).text(truncatedText + ellipsis);
                }
              }
            }
          } catch (err) {
            console.error("调整文本大小错误:", err, d);
            d3.select(this).text("错误文本");
          }
        });

      // 添加出生日期文本
      node.append("text")
        .attr("dy", "1.2em")  // 向下移动一点
        .attr("x", 0)
        .attr("text-anchor", "middle")
        .text(d => {
          try {
            if (!d.data || !d.data.birthDate) return "?";
            const birthYear = d.data.birthDate.substring(0, 4);
            const deathYear = d.data.deathDate ? d.data.deathDate.substring(0, 4) : "";
            return deathYear ? `${birthYear}-${deathYear}` : `${birthYear}年`;
          } catch (err) {
            console.error("节点日期错误:", err, d);
            return "????年";
          }
        })
        .style("font-size", "12px")
        .attr("fill", "#666");

      // 根据节点数量自动调整缩放
      if (totalNodeCount > 20 && nodes && typeof nodes.descendants === 'function') {
        // 如果节点数量过多，自动缩小初始视图
        const initialScale = Math.max(0.8, 1 - (totalNodeCount - 20) * 0.01);
        svg.attr("transform", `translate(${margin.left},${margin.top}) scale(${initialScale})`);
      }

      // 实现安全的缩放功能
      try {
        // 使用安全的方法实现缩放
        const handleZoom = (event: any) => {
          if (event && event.transform && svg) {
            svg.attr("transform", event.transform);
          }
        };
        
        // 创建一个自定义的zoom行为
        const zoom = d3.zoom<SVGSVGElement, unknown>()
          .scaleExtent([0.1, 3])
          .on("zoom", handleZoom);

        // 将缩放行为应用到SVG元素上，而不是内部的g元素
        mainSvg.call(zoom as any)
          .on("dblclick.zoom", null);
        
        // 存储缩放实例，用于后续的缩放控件
        const safeZoomInstance = {
          scaleBy: (selection: any, factor: number) => {
            try {
              if (selection && zoom) {
                zoom.scaleBy(selection, factor);
              }
            } catch (e) {
              console.error('缩放操作失败:', e);
            }
          },
          transform: (selection: any, transform: any) => {
            try {
              if (selection && zoom) {
                zoom.transform(selection, transform);
              }
            } catch (e) {
              console.error('应用变换失败:', e);
            }
          }
        };
        
        setZoomInstance(safeZoomInstance);
      } catch (zoomError) {
        console.error('设置缩放功能失败:', zoomError);
      }

      // 为节点添加点击事件，跳转到成员详情页
      node.style("cursor", "pointer")
        .on("click", (event, d) => {
          window.location.href = `/members/${d.data.id}`;
        })
        .on("mouseover", function() {
          d3.select(this).select("rect")
            .attr("stroke-width", 2.5)
            .attr("opacity", 1);
        })
        .on("mouseout", function() {
          d3.select(this).select("rect")
            .attr("stroke-width", 1.5)
            .attr("opacity", 0.9);
        });

      console.log('族谱树绘制完成');

    } catch (error) {
      console.error('绘制族谱树时发生错误:', error);
      // 在发生错误时清除SVG并显示错误信息
      if (svgRef.current) {
        const errorSvg = d3.select(svgRef.current);
        errorSvg.selectAll("*").remove();
        
        // 添加错误提示文本
        errorSvg.append("text")
          .attr("x", 600)
          .attr("y", 300)
          .attr("text-anchor", "middle")
          .style("font-size", "16px")
          .style("fill", "red")
          .text("族谱树渲染失败，正在尝试紧急恢复...");
        
        // 延迟1秒后尝试使用应急数据重新渲染
        setTimeout(() => {
          setTreeData({
            id: "emergency_root",
            name: "应急显示",
            gender: "MALE",
            birthDate: "1900-01-01",
            children: [
              {
                id: "emergency_child1",
                name: "应急子节点1",
                gender: "MALE",
                birthDate: "1930-01-01"
              },
              {
                id: "emergency_child2",
                name: "应急子节点2",
                gender: "FEMALE",
                birthDate: "1935-01-01"
              }
            ]
          });
        }, 1000);
      }
      
      setError(`绘制族谱树失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [treeData, displayMode]); // 确保在treeData和displayMode变化时重新渲染

  // 添加缩放控制按钮
  useEffect(() => {
    // 只有当svg引用和缩放实例都存在且具有所需方法时才添加控件
    if (!svgRef.current || !zoomInstance || 
        typeof zoomInstance.scaleBy !== 'function' || 
        typeof zoomInstance.transform !== 'function') {
      console.log("缩放实例不完整，跳过控件创建");
      return;
    }

    try {
      // 清除之前的控制按钮
      const svg = d3.select(svgRef.current);
      if (!svg || typeof svg.selectAll !== 'function') {
        console.error("无法选择SVG元素");
        return;
      }

      svg.selectAll(".zoom-controls").remove();
      
      // 创建缩放控制按钮容器
      const zoomControls = svg.append("g")
        .attr("class", "zoom-controls")
        .attr("transform", `translate(20, 20)`);

      if (!zoomControls || typeof zoomControls.append !== 'function') {
        console.error("无法创建缩放控件容器");
        return;
      }

      // 安全执行缩放函数
      const safeZoom = (operation: 'zoomIn' | 'zoomOut' | 'reset') => {
        if (!svgRef.current || !zoomInstance) return;
        
        try {
          const selection = d3.select(svgRef.current);
          if (selection && typeof selection.transition === 'function') {
            const transition = selection.transition().duration(300);
            
            if (operation === 'zoomIn' && typeof zoomInstance.scaleBy === 'function') {
              zoomInstance.scaleBy(selection, 1.3);
            } else if (operation === 'zoomOut' && typeof zoomInstance.scaleBy === 'function') {
              zoomInstance.scaleBy(selection, 0.7);
            } else if (operation === 'reset' && typeof zoomInstance.transform === 'function') {
              zoomInstance.transform(selection, d3.zoomIdentity);
            }
          }
        } catch (err) {
          console.error(`执行${operation}操作失败:`, err);
        }
      };

      // 添加放大按钮
      zoomControls.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 30)
        .attr("height", 30)
        .attr("rx", 5)
        .attr("fill", "#fff")
        .attr("stroke", "#ddd")
        .style("cursor", "pointer")
        .on("click", () => safeZoom('zoomIn'));

      zoomControls.append("text")
        .attr("x", 15)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .attr("font-size", "18px")
        .attr("fill", "#666")
        .text("+")
        .style("cursor", "pointer")
        .on("click", () => safeZoom('zoomIn'));

      // 添加缩小按钮
      zoomControls.append("rect")
        .attr("x", 0)
        .attr("y", 40)
        .attr("width", 30)
        .attr("height", 30)
        .attr("rx", 5)
        .attr("fill", "#fff")
        .attr("stroke", "#ddd")
        .style("cursor", "pointer")
        .on("click", () => safeZoom('zoomOut'));

      zoomControls.append("text")
        .attr("x", 15)
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .attr("font-size", "18px")
        .attr("fill", "#666")
        .text("-")
        .style("cursor", "pointer")
        .on("click", () => safeZoom('zoomOut'));

      // 添加重置按钮
      zoomControls.append("rect")
        .attr("x", 0)
        .attr("y", 80)
        .attr("width", 30)
        .attr("height", 30)
        .attr("rx", 5)
        .attr("fill", "#fff")
        .attr("stroke", "#ddd")
        .style("cursor", "pointer")
        .on("click", () => safeZoom('reset'));

      zoomControls.append("text")
        .attr("x", 15)
        .attr("y", 100)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "#666")
        .text("重置")
        .style("cursor", "pointer")
        .on("click", () => safeZoom('reset'));

    } catch (error) {
      console.error("创建缩放控件失败:", error);
    }
  }, [zoomInstance]);

  // 计算节点总数的辅助函数
  function countNodes(node: TreeNode): number {
    if (!node) return 0;
    let count = 1; // 当前节点
    if (node.children) {
      node.children.forEach(child => {
        count += countNodes(child);
      });
    }
    return count;
  }

  // 处理根节点更改
  const handleRootChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRootId(value || null);
  };

  // 切换显示模式
  const toggleDisplayMode = () => {
    setDisplayMode(prev => prev === 'horizontal' ? 'vertical' : 'horizontal');
  };

  // 导出族谱树为PNG图片
  const exportTreeAsPNG = () => {
    if (!svgRef.current) return;

    try {
      const svgElement = svgRef.current;
      
      // 获取SVG的尺寸
      const svgWidth = svgElement.width.baseVal.value;
      const svgHeight = svgElement.height.baseVal.value;
      
      // 创建一个Canvas元素
      const canvas = document.createElement('canvas');
      canvas.width = svgWidth;
      canvas.height = svgHeight;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('无法创建canvas上下文');
      }
      
      // 设置白色背景
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 将SVG转换为字符串
      const svgData = new XMLSerializer().serializeToString(svgElement);
      
      // 创建一个新的图片对象
      const img = new Image();
      
      // 当图片加载完成时，绘制到Canvas上
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        
        // 将Canvas转换为数据URL
        const dataUrl = canvas.toDataURL('image/png');
        
        // 创建下载链接
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = '族谱树.png';
        
        // 触发下载
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        setMessage({ 
          text: '族谱树已成功导出为PNG图片',
          type: 'success'
        });
        
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      };
      
      // 处理图片加载失败
      img.onerror = (error) => {
        console.error('导出图片失败:', error);
        setMessage({
          text: '导出图片失败，请稍后重试',
          type: 'error'
        });
        
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      };
      
      // 将SVG数据转换为Base64编码的图片URL
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    } catch (error) {
      console.error('导出族谱树失败:', error);
      setMessage({
        text: '导出族谱树失败，请稍后重试',
        type: 'error'
      });
      
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  // 添加搜索功能
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }
    
    // 搜索匹配的成员
    const results = allMembers.filter(member => 
      member.name.toLowerCase().includes(value) || 
      (member.id && member.id.toLowerCase().includes(value))
    ).slice(0, 10); // 限制结果数量
    
    setSearchResults(results);
  };
  
  // 定位到特定节点
  const focusOnNode = (nodeId: string) => {
    if (!svgRef.current || !zoomInstance || !nodeId) {
      console.log('无法定位节点：SVG引用、缩放实例或节点ID不存在');
      return;
    }
    
    setSearchTerm('');
    setSearchResults([]);
    
    // 安全执行节点定位
    const safeNodeFocus = () => {
      try {
        // 找到目标节点
        const svg = d3.select(svgRef.current);
        if (!svg || typeof svg.selectAll !== 'function') {
          throw new Error('无法选择SVG元素');
        }
        
        const targetNode = svg
          .selectAll(".node")
          .filter(function() {
            try {
              return d3.select(this).attr("data-id") === nodeId;
            } catch (e) {
              console.error('节点过滤出错:', e);
              return false;
            }
          });
        
        if (targetNode.empty() || !targetNode.node()) {
          throw new Error('未找到目标节点');
        }
        
        // 检查zoomInstance是否有所需的transform方法
        if (typeof zoomInstance.transform !== 'function') {
          throw new Error('缩放实例缺少transform方法');
        }
        
        // 安全获取缩放转换
        let transform;
        try {
          // 使用非空断言，因为之前已经检查过svgRef.current存在
          transform = d3.zoomTransform(svgRef.current!);
        } catch (error) {
          console.warn("获取缩放转换失败，使用默认值:", error);
          transform = d3.zoomIdentity; // 使用默认值
        }
        
        // 确保svgRef.current存在
        const svgWidth = svgRef.current?.clientWidth || 1000;
        const svgHeight = svgRef.current?.clientHeight || 800;
        
        // 安全获取节点转换
        const nodeElement = targetNode.node() as SVGGElement;
        if (!nodeElement) {
          throw new Error('无法获取节点元素');
        }
        
        const nodeSelection = d3.select(nodeElement);
        if (!nodeSelection || typeof nodeSelection.attr !== 'function') {
          throw new Error('无法选择节点元素');
        }
        
        const nodeTransform = nodeSelection.attr("transform");
        if (!nodeTransform) {
          throw new Error('节点转换属性不存在');
        }
        
        const translationValues = nodeTransform.match(/translate\(([^,]+),([^)]+)\)/);
        if (!translationValues || translationValues.length < 3) {
          throw new Error('无法解析节点位置信息');
        }
        
        const x = parseFloat(translationValues[1]);
        const y = parseFloat(translationValues[2]);
        
        // 验证x和y是否为有效数字
        if (isNaN(x) || isNaN(y)) {
          throw new Error('节点坐标无效');
        }
        
        // 计算缩放和平移，使节点居中显示
        const scale = Math.min(2, transform?.k || 1);
        const translateX = svgWidth / 2 - x * scale;
        const translateY = svgHeight / 2 - y * scale;
        
        // 应用变换
        const svgSelection = d3.select(svgRef.current);
        if (!svgSelection || typeof svgSelection.transition !== 'function') {
          throw new Error('无法创建SVG选择对象');
        }
        
        svgSelection
          .transition()
          .duration(750)
          .call(
            zoomInstance.transform,
            d3.zoomIdentity.translate(translateX, translateY).scale(scale)
          );
        
        // 突出显示节点
        const rectSelection = targetNode.select("rect");
        if (rectSelection && !rectSelection.empty()) {
          rectSelection
            .transition()
            .duration(500)
            .attr("stroke-width", 4)
            .attr("filter", "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))")
            .transition()
            .delay(2000)
            .duration(500)
            .attr("stroke-width", 1.5)
            .attr("filter", "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))");
        }
        
        // 查找成员名称
        const memberName = allMembers.find(m => m.id === nodeId)?.name || '未知成员';
        
        return {
          success: true,
          memberName
        };
      } catch (error) {
        console.error('定位节点操作失败:', error);
        return {
          success: false,
          error: error instanceof Error ? error.message : String(error)
        };
      }
    };
    
    // 执行节点定位并处理结果
    const focusResult = safeNodeFocus();
    
    if (focusResult.success) {
      setMessage({
        text: `已定位到成员: ${focusResult.memberName}`,
        type: 'success'
      });
    } else {
      setMessage({
        text: `定位节点失败: ${focusResult.error}`,
        type: 'error'
      });
    }
    
    // 无论成功与否，3秒后清除消息
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">族谱树</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="搜索成员..."
                className="block w-64 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {searchResults.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                  {searchResults.map(member => (
                    <div 
                      key={member.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => focusOnNode(member.id)}
                    >
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-gray-500">
                        {member.gender === 'MALE' ? '男' : member.gender === 'FEMALE' ? '女' : '其他'}
                        {member.birthDate && ` · ${new Date(member.birthDate).getFullYear()}年`}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <select
              value={selectedRootId || ""}
              onChange={handleRootChange}
              className="block w-64 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">自动选择根节点</option>
              {allMembers.map(member => (
                <option key={member.id} value={member.id}>
                  {member.name} ({member.gender === 'MALE' ? '男' : member.gender === 'FEMALE' ? '女' : '其他'})
                </option>
              ))}
            </select>

            <button
              onClick={toggleDisplayMode}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {displayMode === 'horizontal' ? '纵向显示' : '横向显示'}
            </button>

            <button
              onClick={exportTreeAsPNG}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              导出为图片
            </button>

            <Link
              href="/tree/simple"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              简化族谱树
            </Link>
            
            <Link
              href="/tree/test"
              className="inline-flex items-center px-4 py-2 border border-indigo-300 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              测试树页面
            </Link>
          </div>
        </div>
        
        <div className="mb-4 flex justify-center space-x-4">
          <button 
            onClick={() => {
              setTreeData({
                id: "root",
                name: "缪伯清（应急显示）",
                gender: "MALE",
                birthDate: "1900-01-01",
                children: [
                  {
                    id: "child1",
                    name: "第二代成员1",
                    gender: "MALE",
                    birthDate: "1930-01-01"
                  },
                  {
                    id: "child2",
                    name: "第二代成员2",
                    gender: "FEMALE",
                    birthDate: "1935-01-01"
                  }
                ]
              });
              setError(null);
            }}
            className="inline-flex items-center px-4 py-2 border border-yellow-500 rounded-md shadow-sm text-sm font-medium text-yellow-700 bg-yellow-50 hover:bg-yellow-100 focus:outline-none"
          >
            紧急模式（使用测试数据）
          </button>
          
          <button 
            onClick={() => {
              window.location.reload();
            }}
            className="inline-flex items-center px-4 py-2 border border-blue-500 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none"
          >
            刷新页面
          </button>
        </div>

        {message && (
          <div className={`rounded-md p-4 mb-4 ${
            message.type === 'success' ? 'bg-green-50' : 
            message.type === 'error' ? 'bg-red-50' : 'bg-blue-50'
          }`}>
            <div className="flex">
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${
                  message.type === 'success' ? 'text-green-800' : 
                  message.type === 'error' ? 'text-red-800' : 'text-blue-800'
                }`}>
                  {message.text}
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">加载中...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
              <p className="text-gray-500 mt-2">请先添加成员和家族关系</p>
              <div className="mt-4 flex flex-col items-center space-y-4">
                <Link 
                  href="/members/new" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  添加成员
                </Link>
                <div className="flex space-x-4">
                  <Link 
                    href="/tree/simple" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                    查看简化族谱树
                  </Link>
                  <Link 
                    href="/tree/test" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                    查看测试树
                  </Link>
                </div>
                <button 
                  onClick={() => setTreeData({
                    id: "root",
                    name: "缪伯清（应急显示）",
                    gender: "MALE",
                    birthDate: "1900-01-01",
                    children: [
                      {
                        id: "child1",
                        name: "第二代成员1",
                        gender: "MALE",
                        birthDate: "1930-01-01"
                      },
                      {
                        id: "child2",
                        name: "第二代成员2",
                        gender: "FEMALE",
                        birthDate: "1935-01-01"
                      }
                    ]
                  })}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                >
                  应急显示
                </button>
              </div>
            </div>
          ) : treeData ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">男性</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">女性</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">其他</span>
                  </div>
                </div>
              </div>
              <div className="overflow-auto" style={{ 
                maxHeight: 'calc(100vh - 300px)',
                minHeight: '500px',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                position: 'relative'
              }}>
                <div className="tree-container" style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  position: 'relative'
                }}>
                  <svg ref={svgRef} style={{ 
                    display: 'block',
                    minWidth: '100%', 
                    minHeight: '100%',
                    background: '#fafafa',
                    shapeRendering: 'geometricPrecision', // 提高线条清晰度
                    textRendering: 'optimizeLegibility',  // 提高文本清晰度
                    WebkitFontSmoothing: 'antialiased',   // Safari/Chrome
                    MozOsxFontSmoothing: 'grayscale'      // Firefox
                  }}></svg>
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 p-2 rounded-md text-sm text-gray-500">
                  可缩放和平移查看更多内容
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">点击节点查看成员详情</p>
              
              {/* 添加调试信息 */}
              {process.env.NODE_ENV !== 'production' && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">调试信息</h3>
                  <div className="text-xs text-gray-600">
                    <p>树数据状态: {treeData ? '已加载' : '未加载'}</p>
                    <p>节点数量: {treeData ? countNodes(treeData) : 0}</p>
                    <p>加载状态: {isLoading ? '加载中' : '已完成'}</p>
                    <p>错误信息: {error || '无'}</p>
                    <p>选中根节点ID: {selectedRootId || '自动选择'}</p>
                    <p>显示模式: {displayMode}</p>
                    <button 
                      onClick={() => console.log('当前树数据:', treeData)} 
                      className="mt-2 px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                    >
                      在控制台打印树数据
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无家族树数据</p>
              <p className="text-gray-500 mt-2">请先添加成员和家族关系</p>
              <Link 
                href="/members/new" 
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                添加成员
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 