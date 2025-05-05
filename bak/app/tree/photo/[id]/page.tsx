'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface TreePhotoView {
  id: string;
  imageUrl: string;
  members: Array<{
    id: string;
    name: string;
    position: { x: number; y: number };
  }>;
  relationships: Array<{
    parent: string;
    child: string;
  }>;
}

// 模拟数据 - 实际应用中应从API获取
const getPhotoTreeData = (id: string): TreePhotoView => {
  return {
    id,
    imageUrl: '/uploads/trees/sample-tree.jpg',
    members: [
      { id: '1', name: '祖先', position: { x: 100, y: 50 } },
      { id: '2', name: '长子', position: { x: 50, y: 150 } },
      { id: '3', name: '次子', position: { x: 150, y: 150 } },
      { id: '4', name: '孙子1', position: { x: 25, y: 250 } },
      { id: '5', name: '孙子2', position: { x: 75, y: 250 } },
      { id: '6', name: '孙子3', position: { x: 125, y: 250 } },
      { id: '7', name: '孙子4', position: { x: 175, y: 250 } },
    ],
    relationships: [
      { parent: '1', child: '2' },
      { parent: '1', child: '3' },
      { parent: '2', child: '4' },
      { parent: '2', child: '5' },
      { parent: '3', child: '6' },
      { parent: '3', child: '7' },
    ],
  };
};

export default function PhotoTreeViewPage({
  params,
}: {
  params: { id: string };
}) {
  const [treeData, setTreeData] = useState<TreePhotoView | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);

    try {
      // 在真实应用中，这里应该从API获取数据
      // fetch(`/api/tree/photo/${params.id}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     setTreeData(data);
      //     setIsLoading(false);
      //   })
      //   .catch(err => {
      //     console.error('获取照片族谱数据失败:', err);
      //     setError('获取照片族谱数据失败');
      //     setIsLoading(false);
      //   });

      // 使用模拟数据
      const data = getPhotoTreeData(params.id);
      setTreeData(data);
      setIsLoading(false);
    } catch (err) {
      console.error('获取照片族谱数据失败:', err);
      setError('获取照片族谱数据失败');
      setIsLoading(false);
    }
  }, [params.id]);

  const handleMemberClick = (memberId: string) => {
    setSelectedMember(memberId === selectedMember ? null : memberId);
  };

  const handleViewMember = (memberId: string) => {
    router.push(`/members/${memberId}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">照片族谱查看</h1>
          <div className="flex items-center space-x-4">
            <Link
              href="/tree"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              返回族谱树
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">加载中...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
              <Link
                href="/tree"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                返回族谱树
              </Link>
            </div>
          ) : treeData ? (
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  点击照片上的标记查看成员信息，或直接点击查看成员按钮导航到成员详情页面。
                </p>
              </div>

              <div className="relative border rounded-lg overflow-hidden">
                {/* 图片占位符 - 真实应用中应使用实际上传的图片 */}
                <div className="relative aspect-[16/9] bg-gray-100">
                  <svg
                    className="absolute h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  
                  {/* 成员标记 */}
                  {treeData.members.map((member) => (
                    <div
                      key={member.id}
                      className={`absolute cursor-pointer transition-all duration-300 ${
                        selectedMember === member.id
                          ? 'z-10 scale-110'
                          : 'z-0 hover:scale-110'
                      }`}
                      style={{
                        left: `${member.position.x / 2}%`,
                        top: `${member.position.y / 3}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => handleMemberClick(member.id)}
                    >
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${
                          selectedMember === member.id
                            ? 'bg-indigo-600 text-white border-white'
                            : 'bg-white text-indigo-600 border-indigo-600'
                        }`}
                      >
                        {member.id}
                      </div>
                      
                      {/* 选中时显示的信息卡片 */}
                      {selectedMember === member.id && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md p-3 z-20">
                          <h3 className="font-medium text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-500">ID: {member.id}</p>
                          <button
                            onClick={() => handleViewMember(member.id)}
                            className="mt-2 w-full px-3 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700"
                          >
                            查看成员详情
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* 关系连线 */}
                  <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 5 }}
                  >
                    {treeData.relationships.map((rel, index) => {
                      const parent = treeData.members.find(m => m.id === rel.parent);
                      const child = treeData.members.find(m => m.id === rel.child);
                      
                      if (!parent || !child) return null;
                      
                      return (
                        <line
                          key={index}
                          x1={`${parent.position.x / 2}%`}
                          y1={`${parent.position.y / 3}%`}
                          x2={`${child.position.x / 2}%`}
                          y2={`${child.position.y / 3}%`}
                          stroke={selectedMember === parent.id || selectedMember === child.id ? "#4f46e5" : "#9ca3af"}
                          strokeWidth="2"
                          strokeDasharray={selectedMember === parent.id || selectedMember === child.id ? "none" : "5,5"}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">成员列表</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {treeData.members.map((member) => (
                    <div
                      key={member.id}
                      className={`p-4 border rounded-md transition-colors ${
                        selectedMember === member.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                      onClick={() => handleMemberClick(member.id)}
                    >
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-500">ID: {member.id}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewMember(member.id);
                        }}
                        className="mt-2 px-3 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700"
                      >
                        查看详情
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无照片族谱数据</p>
              <Link
                href="/tree/upload"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                上传族谱照片
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 