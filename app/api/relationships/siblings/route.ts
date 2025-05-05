import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { RelationType } from '@/generated/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth/authOptions";

// 获取所有兄弟姐妹关系
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    const relationships = await prisma.relationship.findMany({
      where: {
        type: RelationType.SIBLING
      },
      include: {
        sibling1: true,
        sibling2: true,
      },
    });
    return NextResponse.json(relationships);
  } catch (error) {
    console.error('获取兄弟姐妹关系失败:', error);
    return NextResponse.json(
      { message: '获取兄弟姐妹关系失败' },
      { status: 500 }
    );
  }
}

// 创建兄弟姐妹关系
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    const data = await request.json();
    
    // 验证必填字段
    if (!data.sibling1Id || !data.sibling2Id) {
      return NextResponse.json(
        { message: '兄弟姐妹关系需要提供两人的ID' },
        { status: 400 }
      );
    }

    // 检查是否已存在相同的兄弟姐妹关系
    const existingRelationship = await prisma.relationship.findFirst({
      where: {
        type: RelationType.SIBLING,
        OR: [
          {
            AND: [
              { sibling1Id: data.sibling1Id },
              { sibling2Id: data.sibling2Id }
            ]
          },
          {
            AND: [
              { sibling1Id: data.sibling2Id },
              { sibling2Id: data.sibling1Id }
            ]
          }
        ]
      }
    });

    if (existingRelationship) {
      return NextResponse.json(
        { message: '该兄弟姐妹关系已存在' },
        { status: 400 }
      );
    }

    // 创建新的兄弟姐妹关系
    const relationship = await prisma.relationship.create({
      data: {
        type: RelationType.SIBLING,
        sibling1: { connect: { id: data.sibling1Id } },
        sibling2: { connect: { id: data.sibling2Id } },
        startDate: data.startDate ? new Date(data.startDate) : undefined,
        endDate: data.endDate ? new Date(data.endDate) : undefined,
      },
      include: {
        sibling1: true,
        sibling2: true,
      },
    });

    return NextResponse.json(relationship);
  } catch (error) {
    console.error('创建兄弟姐妹关系失败:', error);
    return NextResponse.json(
      { message: '创建兄弟姐妹关系失败' },
      { status: 500 }
    );
  }
}