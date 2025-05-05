'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

interface TreeNode {
  id: string;
  name: string;
  gender: string;
  birthDate?: string;
  deathDate?: string;
  children?: TreeNode[];
}

// 硬编码的族谱树数据
const sampleTreeData: TreeNode = {
  id: "root",
  name: "绛氏始祖",
  gender: "MALE",
  birthDate: "1850-01-01",
  children: [
    {
      id: "gen1_1",
      name: "绛光明",
      gender: "MALE",
      birthDate: "1880-05-12",
      children: [
        {
          id: "gen2_1",
          name: "绛星阳",
          gender: "MALE",
          birthDate: "1905-08-23",
          children: [
            {
              id: "gen3_1",
              name: "绛伯涛",
              gender: "MALE",
              birthDate: "1930-06-15"
            },
            {
              id: "gen3_2",
              name: "绛伯海",
              gender: "MALE",
              birthDate: "1932-09-03"
            }
          ]
        },
        {
          id: "gen2_2",
          name: "绛月华",
          gender: "FEMALE",
          birthDate: "1908-02-18"
        }
      ]
    },
    {
      id: "gen1_2",
      name: "绛光辉",
      gender: "MALE",
      birthDate: "1885-11-27",
      children: [
        {
          id: "gen2_3",
          name: "绛星阳",
          gender: "MALE",
          birthDate: "1910-12-05",
          children: [
            {
              id: "gen3_3",
              name: "绛伯山",
              gender: "MALE",
              birthDate: "1935-04-22"
            }
          ]
        }
      ]
    }
  ]
};

export default function SimpleTreePage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [displayMode, setDisplayMode] = useState<'horizontal' | 'vertical'>('horizontal');

  // 绘制树图
  useEffect(() => {
    if (!svgRef.current) return;

    console.log('开始绘制简化族谱树');

    // 清除之前的内容
    d3.select(svgRef.current).selectAll("*").remove();

    // 设置边距和尺寸
    const margin = { top: 80, right: 150, bottom: 80, left: 150 };
    const width = 1200;
    const height = 700;

    // 创建SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // 创建层级数据
    const root = d3.hierarchy<TreeNode>(sampleTreeData);

    // 根据显示模式选择布局方向
    let treeLayout;
    if (displayMode === 'horizontal') {
      treeLayout = d3.tree<TreeNode>()
        .size([height - margin.top - margin.bottom, width - margin.left - margin.right - 150]);
    } else {
      // 纵向布局 - 交换宽度和高度
      treeLayout = d3.tree<TreeNode>()
        .size([width - margin.left - margin.right - 150, height - margin.top - margin.bottom]);
    }

    // 应用布局
    const nodes = treeLayout(root);

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
            .x(d => d.y)
            .y(d => d.x)
        : d3.linkVertical<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
            .x(d => d.x)
            .y(d => d.y)
      );

    // 添加节点组
    const node = svg.selectAll(".node")
      .data(nodes.descendants())
      .join("g")
      .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
      .attr("transform", d => displayMode === 'horizontal' 
        ? `translate(${d.y},${d.x})` 
        : `translate(${d.x},${d.y})`);

    // 添加节点背景
    node.append("rect")
      .attr("x", -60)
      .attr("y", -15)
      .attr("width", 120)
      .attr("height", 30)
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("fill", d => {
        return d.data.gender === 'MALE' ? "#e0e7ff" : "#fce7f3";
      })
      .attr("stroke", d => {
        return d.data.gender === 'MALE' ? "#4f46e5" : "#db2777";
      })
      .attr("stroke-width", 1.5);

    // 添加节点名称文本
    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", 0)
      .attr("text-anchor", "middle")
      .text(d => d.data.name)
      .style("font-weight", "bold")
      .style("font-size", "14px");

    // 添加出生日期文本
    node.append("text")
      .attr("dy", "1.8em")
      .attr("x", 0)
      .attr("text-anchor", "middle")
      .text(d => {
        const birthYear = d.data.birthDate ? d.data.birthDate.substring(0, 4) : "?";
        const deathYear = d.data.deathDate ? d.data.deathDate.substring(0, 4) : "";
        return deathYear ? `${birthYear}-${deathYear}` : `${birthYear}年`;
      })
      .style("font-size", "12px")
      .attr("fill", "#666");

    console.log('简化族谱树绘制完成');

  }, [displayMode]);

  // 切换显示模式
  const toggleDisplayMode = () => {
    setDisplayMode(prev => prev === 'horizontal' ? 'vertical' : 'horizontal');
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">简化族谱树</h1>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDisplayMode}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              {displayMode === 'horizontal' ? '纵向显示' : '横向显示'}
            </button>

            <Link
              href="/tree"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              返回正式族谱树
            </Link>

            <Link
              href="/tree/test"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              查看测试树
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="mb-4 text-gray-500">这是一个简化版的族谱树，使用硬编码数据而非从API获取。用于验证D3.js渲染功能。</p>
          <div className="border border-gray-200 rounded-md overflow-auto" style={{ minHeight: "500px" }}>
            <svg ref={svgRef} style={{ minWidth: "100%", minHeight: "100%" }}></svg>
          </div>
        </div>
      </div>
    </div>
  );
}