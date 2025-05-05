'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Member } from '@/generated/prisma';

interface DuplicateGroup {
  name: string;
  members: Member[];
}

export default function MergeMembersPage() {
  const router = useRouter();
  const [duplicates, setDuplicates] = useState<DuplicateGroup[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedMembers, setSelectedMembers] = useState<Record<string, string>>({});

  // 获取同名成员列表
  useEffect(() => {
    const fetchDuplicates = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/members/merge');
        
        if (!response.ok) {
          throw new Error(`获取同名成员列表失败: ${response.status}`);
        }
        
        const data = await response.json();
        setDuplicates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取同名成员列表失败');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDuplicates();
  }, []);

  // 选择主要成员
  const handleSelectMainMember = (groupName: string, memberId: string) => {
    setSelectedMembers({
      ...selectedMembers,
      [groupName]: memberId
    });
  };

  // 合并成员
  const handleMerge = async (groupName: string) => {
    if (!selectedMembers[groupName]) {
      setError('请先选择一个主要成员作为合并目标');
      return;
    }

    const group = duplicates.find(d => d.name === groupName);
    if (!group) return;

    const mainMemberId = selectedMembers[groupName];
    const duplicateMemberIds = group.members
      .filter(member => member.id !== mainMemberId)
      .map(member => member.id);

    if (duplicateMemberIds.length === 0) {
      setError('没有可合并的成员');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/members/merge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mainMemberId,
          duplicateMemberIds
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '合并成员失败');
      }

      const result = await response.json();
      setSuccessMessage(`成功合并了 ${duplicateMemberIds.length} 个"${groupName}"成员`);
      
      // 从列表中移除已合并的组
      setDuplicates(duplicates.filter(d => d.name !== groupName));
      
      // 清除该组的选择
      const newSelectedMembers = { ...selectedMembers };
      delete newSelectedMembers[groupName];
      setSelectedMembers(newSelectedMembers);
    } catch (err) {
      setError(err instanceof Error ? err.message : '合并成员失败');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // 格式化出生日期显示
  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return '未知';
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN');
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">合并同名成员</h1>
        <p className="mt-1 text-sm text-gray-600">
          此页面显示了所有同名的成员，您可以选择将它们合并为一个成员。
        </p>
      </div>

      {error && (
        <div className="mt-6 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="mt-6 rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">{successMessage}</h3>
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="spinner-border text-blue-500" role="status">
              <span className="sr-only">加载中...</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">正在加载同名成员...</p>
          </div>
        </div>
      ) : duplicates.length === 0 ? (
        <div className="text-center py-12">
          <p className="mt-2 text-sm text-gray-600">
            {successMessage ? '没有更多同名成员需要合并' : '没有找到同名成员'}
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-8">
          {duplicates.map((group) => (
            <div key={group.name} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  同名成员: {group.name} ({group.members.length}个)
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  请选择一个主要成员，其他同名成员将合并到这个成员中。
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          选择
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          姓名
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          性别
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          出生日期
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          去世日期
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {group.members.map((member) => (
                        <tr 
                          key={member.id} 
                          className={selectedMembers[group.name] === member.id ? 'bg-blue-50' : ''}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="radio"
                              name={`main-member-${group.name}`}
                              value={member.id}
                              checked={selectedMembers[group.name] === member.id}
                              onChange={() => handleSelectMainMember(group.name, member.id)}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="truncate" title={member.id}>
                              {member.id.substring(0, 8)}...
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {member.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {member.gender === 'MALE' ? '男' : member.gender === 'FEMALE' ? '女' : '其他'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(member.birthDate)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {member.deathDate ? formatDate(member.deathDate) : '在世'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-4 sm:px-6">
                  <button
                    type="button"
                    onClick={() => handleMerge(group.name)}
                    disabled={!selectedMembers[group.name] || isLoading}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isLoading ? '合并中...' : '合并这组成员'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 