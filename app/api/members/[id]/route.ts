import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
    const id = params.id;
    
    // 检查是否要包含关系信息
    const { searchParams } = new URL(request.url);
    const includeParentRelations = searchParams.get('include')?.includes('parentRelations');
    const includeChildRelations = searchParams.get('include')?.includes('childRelations');
    const includeSpouseRelations = searchParams.get('include')?.includes('spouseRelations');
    
    const member = await prisma.member.findUnique({
      where: { id },
      include: {
        parentRelations: includeParentRelations ? {
          include: { parent: true }
        } : false,
        childRelations: includeChildRelations ? {
          include: { child: true }
        } : false,
        spouseAsSpouse1: includeSpouseRelations ? {
          include: { spouse2: true }
        } : false,
        spouseAsSpouse2: includeSpouseRelations ? {
          include: { spouse1: true }
        } : false,
        events: true,
      },
    });

    if (!member) {
      return NextResponse.json(
        { message: '成员不存在' },
        { status: 404 }
      );
    }

    // 验证权限：只有创建者才能查看
    const session = await getServerSession(authOptions);
    const isCreator = session?.user?.id === member.creatorId;

    return NextResponse.json({ ...member, isCreator });
  } catch (error) {
    console.error('获取成员信息失败:', error);
    return NextResponse.json(
      { message: '获取成员信息失败' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // 获取当前登录用户
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: '未授权访问，请先登录' },
        { status: 401 }
      );
    }

    // 查询成员信息，包括创建者
    const existingMember = await prisma.member.findUnique({
      where: { id }
    });

    console.log("app/api/members/[id]/route.ts: session.user.email = ", session.user.email);

    if (!existingMember) {
      return NextResponse.json(
        { message: '成员不存在' },
        { status: 404 }
      );
    }

    // 验证权限：只有管理员、编辑者或创建者才能修改
    const isAdmin = session?.user?.role === "ADMIN";
    const isEditor = session?.user?.role === "EDITOR";
    const isCreator = existingMember.creatorId === session?.user?.id;
    
    if (!isAdmin && !isEditor && !isCreator) {
      return NextResponse.json(
        { message: '权限不足，只有管理员、编辑者或创建者才能修改成员信息' },
        { status: 403 }
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

    const member = await prisma.member.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        gender: data.gender,
        birthDate: new Date(data.birthDate),
        deathDate: data.deathDate ? new Date(data.deathDate) : null,
        biography: data.biography,
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    console.error('更新成员信息失败:', error);
    return NextResponse.json(
      { message: '更新成员信息失败' },
      { status: 500 }
    );
  }
}
