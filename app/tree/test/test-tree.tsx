'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

interface TestTreeNode {
  id: string;
  name: string;
  gender: string;
  birthDate?: string;
  children?: TestTreeNode[];
}

export default function TestTreePage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [error, setError] = useState<string | null>(null);
  
  // 静态测试数据
  const staticTreeData: TestTreeNode = {
    id: "root",
    name: "根节点-测试",
    gender: "MALE",
    birthDate: "1900-01-01",
    children: [
      {
        id: "child1",
        name: "子节点1-李小明",
        gender: "MALE",
        birthDate: "1930-01-01",
        children: [
          {
            id: "grandchild1",
            name: "孙节点1-李明明",
            gender: "MALE",
            birthDate: "1960-01-01"
          },
          {
            id: "grandchild2",
            name: "孙节点2-李芳芳",
            gender: "FEMALE",
            birthDate: "1962-01-01"
          }
        ]
      },
      {
        id: "child2",
        name: "子节点2-李小红",
        gender: "FEMALE",
        birthDate: "1935-01-01",
        children: [
          {
            id: "grandchild3",
            name: "孙节点3-王小虎",
            gender: "MALE",
            birthDate: "1965-01-01"
          }
        ]
      }
    ]
  };

  // 在组件挂载后渲染树图
  useEffect(() => {
    if (!svgRef.current) return;

    try {
      console.log('开始渲染测试族谱树');
      
      // 清除SVG内容
      d3.select(svgRef.current).selectAll("*").remove();
      
      // 设置边距和尺寸
      const margin = { top: 50, right: 100, bottom: 50, left: 100 };
      const width = 800;
      const height = 500;
      
      // 创建SVG
      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
      
      // 创建层级数据
      const root = d3.hierarchy<TestTreeNode>(staticTreeData);
      
      // 创建树布局
      const treeLayout = d3.tree<TestTreeNode>()
        .size([height - margin.top - margin.bottom, width - margin.left - margin.right - 100])
        .separation((a, b) => a.parent === b.parent ? 1.5 : 2);
      
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
        .attr("d", d3.linkHorizontal<d3.HierarchyPointLink<TestTreeNode>, d3.HierarchyPointNode<TestTreeNode>>()
          .x((d: any) => d.y)
          .y((d: any) => d.x)
        );
      
      // 添加节点组
      const node = svg.selectAll(".node")
        .data(nodes.descendants())
        .join("g")
        .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
        .attr("transform", d => `translate(${d.y},${d.x})`);
      
      // 添加节点背景
      node.append("rect")
        .attr("x", -70)
        .attr("y", -15)
        .attr("width", 140)
        .attr("height", 35)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", d => d.data.gender === "MALE" ? "#e0e7ff" : "#fce7f3")
        .attr("stroke", d => d.data.gender === "MALE" ? "#4f46e5" : "#db2777")
        .attr("stroke-width", 1.5);
      
      // 添加节点名称文本
      node.append("text")
        .attr("dy", "-0.2em")
        .attr("x", 0)
        .attr("text-anchor", "middle")
        .text(d => d.data.name)
        .style("font-weight", "bold")
        .style("font-size", "14px");
      
      // 添加出生日期文本
      node.append("text")
        .attr("dy", "1.2em")
        .attr("x", 0)
        .attr("text-anchor", "middle")
        .text(d => d.data.birthDate ? d.data.birthDate.substring(0, 4) + "年" : "")
        .style("font-size", "12px")
        .attr("fill", "#666");
      
      console.log('测试族谱树渲染完成');
    } catch (error) {
      console.error('渲染测试族谱树出错:', error);
      setError(`渲染出错: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">测试族谱树</h1>
        <Link 
          href="/tree" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          返回主族谱树
        </Link>
      </div>
      
      {error && (
        <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div className="border border-gray-300 rounded p-4">
        <svg 
          ref={svgRef} 
          style={{
            width: "100%",
            height: "500px",
            background: "#fafafa",
            shapeRendering: "geometricPrecision",
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale"
          }}
        ></svg>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-500">这是一个简单的测试页面，用于验证族谱树渲染功能。</p>
      </div>
    </div>
  );
} 