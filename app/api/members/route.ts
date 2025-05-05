import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET() {
  try {
    const members = await prisma.member.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(members);
  } catch (error) {
    console.error('获取成员列表失败:', error);
    return NextResponse.json(
      { message: '获取成员列表失败' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // 验证必填字段
    if (!data.name || !data.gender || !data.birthDate) {
      return NextResponse.json(
        { message: '姓名、性别和出生日期为必填项' },
        { status: 400 }
      );
    }

    const member = await prisma.member.create({
      data: {
        name: data.name,
        gender: data.gender,
        birthDate: new Date(data.birthDate),
        deathDate: data.deathDate ? new Date(data.deathDate) : null,
        biography: data.biography,
        creator: {
          connect: {
            email: session.user.email,
          },
        },
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    console.error('创建成员失败:', error);
    return NextResponse.json(
      { message: '创建成员失败' },
      { status: 500 }
    );
  }
}
