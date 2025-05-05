import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth/authOptions";

// 获取特定关系
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    // 获取ID
    const id = context.params.id;
    
    const relationship = await prisma.relationship.findUnique({
      where: { id },
      include: {
        parent: true,
        child: true,
        spouse1: true,
        spouse2: true,
        sibling1: true,
        sibling2: true,
      },
    });

    if (!relationship) {
      return NextResponse.json(
        { message: '关系不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json(relationship);
  } catch (error) {
    console.error('获取关系信息失败:', error);
    return NextResponse.json(
      { message: '获取关系信息失败' },
      { status: 500 }
    );
  }
}

// 删除特定关系
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    // 获取ID
    const id = context.params.id;
    
    // 检查关系是否存在
    const relationship = await prisma.relationship.findUnique({
      where: { id },
      include: {
        parent: true,
        child: true,
      }
    });

    if (!relationship) {
      return NextResponse.json(
        { message: '关系不存在' },
        { status: 404 }
      );
    }

    // 验证权限：只有管理员、编辑者才能删除关系
    if (session?.user?.role !== "ADMIN" && session?.user?.role !== "EDITOR") {
      // 检查是否为成员的创建者
      if (relationship.parent && relationship.parent.creatorId !== session?.user?.id) {
        if (relationship.child && relationship.child.creatorId !== session?.user?.id) {
          return NextResponse.json(
            { message: '权限不足，只有管理员、编辑者或创建者才能删除关系' },
            { status: 403 }
          );
        }
      }
    }
    
    // 删除关系
    await prisma.relationship.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ message: '关系删除成功' });
  } catch (error) {
    console.error('删除关系失败:', error);
    return NextResponse.json(
      { message: '删除关系失败' },
      { status: 500 }
    );
  }
}
