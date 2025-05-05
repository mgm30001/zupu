import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Member, Relationship, Event } from '@/generated/prisma';
import type { Prisma } from '@/generated/prisma';

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

async function getMemberWithRelations(id: string) {
  return await prisma.member.findUnique({
    where: { id },
    include: {
      parentRelations: {
        include: { parent: true }
      },
      childRelations: {
        include: { child: true }
      },
      spouseAsSpouse1: {
        include: { spouse2: true }
      },
      spouseAsSpouse2: {
        include: { spouse1: true }
      },
      events: true,
    },
  });
}

export default async function MemberDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 解包params
  const { id } = await params;
  
  const member = await prisma.member.findUnique({
    where: { id },
    include: {
      parentRelations: {
        include: { parent: true }
      },
      childRelations: {
        include: { child: true }
      },
      spouseAsSpouse1: {
        include: { spouse2: true }
      },
      spouseAsSpouse2: {
        include: { spouse1: true }
      },
      events: true,
    },
  }) as MemberWithRelations | null;

  if (!member) {
    notFound();
  }

  // 获取父母
  const parents = member.parentRelations.map((relation) => relation.parent);
  
  // 获取子女
  const children = member.childRelations.map((relation) => relation.child);
  
  // 获取配偶
  const spouses = [
    ...member.spouseAsSpouse1.map((relation) => relation.spouse2),
    ...member.spouseAsSpouse2.map((relation) => relation.spouse1),
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
                      parents.map((parent: MemberWithRelations['parentRelations'][number]['parent']) => (
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
                      spouses.map((spouse: MemberWithRelations['spouseAsSpouse1'][number]['spouse2'] | MemberWithRelations['spouseAsSpouse2'][number]['spouse1']) => (
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
                      children.map((child: MemberWithRelations['childRelations'][number]['child']) => (
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

          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">历史事件</h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-white px-4 py-5 sm:px-6">
              {member.events.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {member.events.map((event: MemberWithRelations['events'][number]) => (
                    <li key={event.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">{event.title}</h3>
                            <p className="text-sm text-gray-500">
                              {new Date(event.date).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">暂无历史事件记录</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 