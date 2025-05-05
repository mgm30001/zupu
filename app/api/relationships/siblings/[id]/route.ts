import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth/authOptions";

// 获取特定兄弟姐妹关系
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    const { id } = params;
    
    const relationship = await prisma.relationship.findUnique({
      where: { id },
      include: {
        sibling1: true,
        sibling2: true,
      },
    });

    if (!relationship) {
      return NextResponse.json(
        { message: '兄弟姐妹关系不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json(relationship);
  } catch (error) {
    console.error('获取兄弟姐妹关系失败:', error);
    return NextResponse.json(
      { message: '获取兄弟姐妹关系失败' },
      { status: 500 }
    );
  }
}

// 删除特定兄弟姐妹关系
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    const { id } = params;
    
    // 检查关系是否存在
    const relationship = await prisma.relationship.findUnique({
      where: { id },
    });

    if (!relationship) {
      return NextResponse.json(
        { message: '兄弟姐妹关系不存在' },
        { status: 404 }
      );
    }

    // 删除关系
    await prisma.relationship.delete({
      where: { id },
    });

    return NextResponse.json({ message: '兄弟姐妹关系已成功删除' });
  } catch (error) {
    console.error('删除兄弟姐妹关系失败:', error);
    return NextResponse.json(
      { message: '删除兄弟姐妹关系失败' },
      { status: 500 }
    );
  }
}