import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth/authOptions";

// 获取同名的成员列表
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  // 验证权限：只有管理员和编辑者可以查看和合并同名成员
  if (session?.user?.role !== "ADMIN" && session?.user?.role !== "EDITOR") {
    return NextResponse.json(
      { message: '权限不足，只有管理员或编辑者才能查看同名成员' },
      { status: 403 }
    );
  }

  try {
    // 查询所有成员
    const allMembers = await prisma.member.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    // 找出同名成员
    const duplicateNames = new Map();
    const duplicateMembers = [];

    allMembers.forEach(member => {
      if (!duplicateNames.has(member.name)) {
        duplicateNames.set(member.name, [member]);
      } else {
        duplicateNames.get(member.name).push(member);
      }
    });

    // 将同名成员添加到结果列表
    for (const [name, members] of duplicateNames.entries()) {
      if (members.length > 1) {
        duplicateMembers.push({
          name,
          members
        });
      }
    }

    return NextResponse.json(duplicateMembers);
  } catch (error) {
    console.error('获取同名成员列表失败:', error);
    return NextResponse.json(
      { message: '获取同名成员列表失败' },
      { status: 500 }
    );
  }
}

// 合并同名成员
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  // 验证权限：只有管理员和编辑者可以合并成员
  if (session?.user?.role !== "ADMIN" && session?.user?.role !== "EDITOR") {
    return NextResponse.json(
      { message: '权限不足，只有管理员或编辑者才能合并成员' },
      { status: 403 }
    );
  }

  try {
    const data = await request.json();

    // 验证必填字段
    if (!data.mainMemberId || !data.duplicateMemberIds || data.duplicateMemberIds.length === 0) {
      return NextResponse.json(
        { message: '需要指定主要成员ID和要合并的重复成员ID列表' },
        { status: 400 }
      );
    }

    const { mainMemberId, duplicateMemberIds } = data;

    // 开始事务处理，确保所有操作要么全部成功，要么全部失败
    await prisma.$transaction(async (tx) => {
      // 1. 迁移所有父子关系（重复成员作为父母）
      await tx.relationship.updateMany({
        where: {
          type: 'PARENT_CHILD',
          parentId: { in: duplicateMemberIds }
        },
        data: {
          parentId: mainMemberId
        }
      });

      // 2. 迁移所有父子关系（重复成员作为子女）
      await tx.relationship.updateMany({
        where: {
          type: 'PARENT_CHILD',
          childId: { in: duplicateMemberIds }
        },
        data: {
          childId: mainMemberId
        }
      });

      // 3. 迁移所有配偶关系（重复成员作为配偶1）
      await tx.relationship.updateMany({
        where: {
          type: 'SPOUSE',
          spouse1Id: { in: duplicateMemberIds }
        },
        data: {
          spouse1Id: mainMemberId
        }
      });

      // 4. 迁移所有配偶关系（重复成员作为配偶2）
      await tx.relationship.updateMany({
        where: {
          type: 'SPOUSE',
          spouse2Id: { in: duplicateMemberIds }
        },
        data: {
          spouse2Id: mainMemberId
        }
      });

      // 5. 迁移所有事件关系
      await tx.event.updateMany({
        where: {
          memberId: { in: duplicateMemberIds }
        },
        data: {
          memberId: mainMemberId
        }
      });

      // 6. 删除重复成员
      await tx.member.deleteMany({
        where: {
          id: { in: duplicateMemberIds }
        }
      });
    });

    return NextResponse.json({ 
      message: '成员合并成功', 
      mainMemberId,
      duplicateMemberIds
    });
  } catch (error) {
    console.error('合并成员失败:', error);
    return NextResponse.json(
      { message: '合并成员失败', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 