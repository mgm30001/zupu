import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function MembersPage() {
  const members = await prisma.member.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">家族成员</h1>
          <div className="flex space-x-4">
            <Link
              href="/members/merge"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700"
            >
              合并同名成员
            </Link>
            <Link
              href="/members/new"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              添加成员
            </Link>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {members.map((member) => (
              <li key={member.id}>
                <Link href={`/members/${member.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-indigo-600 truncate">
                          {member.name}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">
                            {member.gender === 'MALE' ? '男' : member.gender === 'FEMALE' ? '女' : '其他'}
                          </span>
                        </div>
                      </div>
                      <div className="ml-6 flex-shrink-0">
                        <div className="text-sm text-gray-500">
                          {member.birthDate 
                            ? `出生日期: ${new Date(member.birthDate).toLocaleDateString()}`
                            : '出生日期: 未知'}
                        </div>
                        {member.deathDate && (
                          <div className="mt-1 text-sm text-gray-500">
                            去世日期: {new Date(member.deathDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 