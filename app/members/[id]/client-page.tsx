'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Member, Relationship, Event } from '@/generated/prisma';

// 定义带关系的成员类型
export type MemberWithRelations = Member & {
  parentRelations: (Relationship & {
    parent: Member;
  })[];
  childRelations: (Relationship & {
    child: Member;
  })[];
  spouseAsSpouse1: (Relationship & {
    spouse2: Member;
  })[];
  spouseAsSpouse2: (Relationship & {
    spouse1: Member;
  })[];
  events: Event[];
};

export default function MemberClientPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [member, setMember] = useState<MemberWithRelations | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDebugMessage, setShowDebugMessage] = useState("");
  
  // 获取成员数据函数
  const fetchMemberData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/members/${id}?include=childRelations,parentRelations,spouseRelations`);
      if (!response.ok) {
        throw new Error('获取成员信息失败');
      }
      const data = await response.json();
      setMember(data);
      setError(null);
    } catch (err) {
      console.error('获取成员信息失败:', err);
      setError(err instanceof Error ? err.message : '获取成员信息失败');
    } finally {
      setIsLoading(false);
    }
  };

  // 首次加载数据
  useEffect(() => {
    fetchMemberData();
  }, [id]);

  // 手动刷新关系数据
  const handleRefreshRelationships = async () => {
    setShowDebugMessage("正在刷新关系数据...");
    await fetchMemberData();
    setShowDebugMessage("关系数据已刷新");
    setTimeout(() => setShowDebugMessage(""), 3000);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <p className="text-center">加载中...</p>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-red-700">{error || '成员不存在'}</p>
          <Link href="/members" className="text-blue-600 mt-4 inline-block">
            返回成员列表
          </Link>
        </div>
      </div>
    );
  }

  // 获取父母
  const parents = member.parentRelations?.map((relation) => relation.parent) || [];
  
  // 获取子女
  const children = member.childRelations?.map((relation) => relation.child) || [];
  
  // 获取配偶
  const spouses = [
    ...(member.spouseAsSpouse1?.map((relation) => relation.spouse2) || []),
    ...(member.spouseAsSpouse2?.map((relation) => relation.spouse1) || []),
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">{member.name}</h1>
          <div className="flex space-x-4">
            <Link
              href={`/members/${member.id}/edit`}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              编辑信息
            </Link>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">基本信息</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">姓名</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{member.name}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">性别</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {member.gender === 'MALE' ? '男' : member.gender === 'FEMALE' ? '女' : '其他'}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">出生日期</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {member.birthDate ? new Date(member.birthDate).toLocaleDateString() : '未知'}
                </dd>
              </div>
              {member.deathDate && (
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">去世日期</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {new Date(member.deathDate).toLocaleDateString()}
                  </dd>
                </div>
              )}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">生平简介</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {member.biography || '暂无'}
                </dd>
              </div>
            </dl>
          </div>

          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">家族关系</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">父母</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="space-y-2">
                    {parents.length > 0 ? (
                      parents.map((parent) => (
                        parent && (
                          <Link
                            key={parent.id}
                            href={`/members/${parent.id}`}
                            className="text-indigo-600 hover:text-indigo-900 block"
                          >
                            {parent.name}
                          </Link>
                        )
                      ))
                    ) : (
                      <span className="text-gray-500">暂无记录</span>
                    )}
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">配偶</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="space-y-2">
                    {spouses.length > 0 ? (
                      spouses.map((spouse) => (
                        spouse && (
                          <Link
                            key={spouse.id}
                            href={`/members/${spouse.id}`}
                            className="text-indigo-600 hover:text-indigo-900 block"
                          >
                            {spouse.name}
                          </Link>
                        )
                      ))
                    ) : (
                      <span className="text-gray-500">暂无记录</span>
                    )}
                  </div>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">子女</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="space-y-2">
                    {children.length > 0 ? (
                      children.map((child) => (
                        child && (
                          <Link
                            key={child.id}
                            href={`/members/${child.id}`}
                            className="text-indigo-600 hover:text-indigo-900 block"
                          >
                            {child.name}
                          </Link>
                        )
                      ))
                    ) : (
                      <span className="text-gray-500">暂无记录</span>
                    )}
                  </div>
                </dd>
              </div>
            </dl>
          </div>
          
          {/* 调试工具区域 */}
          <div className="mt-8 border-t border-gray-200 pt-4 px-6 pb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-500">关系调试工具</h3>
              <button
                type="button"
                onClick={handleRefreshRelationships}
                className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                刷新关系数据
              </button>
            </div>
            {showDebugMessage && (
              <p className="mt-2 text-sm text-indigo-600">{showDebugMessage}</p>
            )}
            <div className="mt-2 text-xs text-gray-500">
              <p>成员ID: {member.id}</p>
              <p>子女关系: {member.childRelations?.length || 0}个</p>
              <p>父母关系: {member.parentRelations?.length || 0}个</p>
              <p>配偶关系: {(member.spouseAsSpouse1?.length || 0) + (member.spouseAsSpouse2?.length || 0)}个</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 