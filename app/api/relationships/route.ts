import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { RelationType } from '@/generated/prisma';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/auth/authOptions";

// 获取所有家族关系
export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    const relationships = await prisma.relationship.findMany({
      include: {
        parent: true,
        child: true,
        spouse1: true,
        spouse2: true,
      },
    });
    return NextResponse.json(relationships);
  } catch (error) {
    console.error('获取家族关系失败:', error);
    return NextResponse.json(
      { message: '获取家族关系失败' },
      { status: 500 }
    );
  }
}

// 创建一个新的家族关系
export async function POST(request: Request) {
  try {
    console.log("开始处理创建关系请求");
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      console.log("未授权请求：用户未登录");
      return new NextResponse(
        JSON.stringify({ message: 'Unauthorized' }),
        { status: 401 }
      );
    }

    console.log("用户认证成功:", session.user.email, "角色:", session.user.role);

    // 验证权限：只有管理员、编辑者或创建者才能创建关系
    if (session?.user?.role !== "ADMIN" && session?.user?.role !== "EDITOR") {
      console.log("权限不足:", session.user.role);
      return NextResponse.json(
        { message: '权限不足，只有管理员或编辑者才能创建关系' },
        { status: 403 }
      );
    }

    const data = await request.json();
    console.log("接收到的关系数据:", data);
    
    // 验证必填字段
    if (!data.type || (!data.parentId && !data.childId && !data.spouse1Id && !data.spouse2Id)) {
      console.error("数据验证失败: 缺少必要字段");
      return NextResponse.json(
        { message: '缺少必要的关系信息' },
        { status: 400 }
      );
    }

    // 根据关系类型创建不同的关系记录
    let relationship;
    
    switch (data.type) {
      case 'PARENT_CHILD':
        if (!data.parentId || !data.childId) {
          console.error("数据验证失败: 父子关系缺少ID", { parentId: data.parentId, childId: data.childId });
          return NextResponse.json(
            { message: '父子关系需要提供父母和子女ID' },
            { status: 400 }
          );
        }

        // 验证父母和子女是否存在
        const parentExists = await prisma.member.findUnique({ where: { id: data.parentId } });
        const childExists = await prisma.member.findUnique({ where: { id: data.childId } });

        if (!parentExists) {
          console.error(`父母ID不存在: ${data.parentId}`);
          return NextResponse.json(
            { message: '指定的父母ID不存在' },
            { status: 404 }
          );
        }

        if (!childExists) {
          console.error(`子女ID不存在: ${data.childId}`);
          return NextResponse.json(
            { message: '指定的子女ID不存在' },
            { status: 404 }
          );
        }

        // 检查关系是否已存在
        const existingRelation = await prisma.relationship.findFirst({
          where: {
            type: RelationType.PARENT_CHILD,
            parentId: data.parentId,
            childId: data.childId
          }
        });

        if (existingRelation) {
          console.log(`关系已存在（ID: ${existingRelation.id}），父: ${data.parentId}, 子: ${data.childId}，返回现有关系`);
          // 返回现有关系，而不是创建新的
          const existingWithDetails = await prisma.relationship.findUnique({
            where: { id: existingRelation.id },
            include: {
              parent: true,
              child: true,
            },
          });
          return NextResponse.json({
            ...existingWithDetails,
            message: "关系已存在，返回现有关系"
          });
        }

        console.log("创建父子关系:", { parentId: data.parentId, childId: data.childId });
        relationship = await prisma.relationship.create({
          data: {
            type: RelationType.PARENT_CHILD,
            parent: { connect: { id: data.parentId } },
            child: { connect: { id: data.childId } },
            startDate: data.startDate ? new Date(data.startDate) : undefined,
            endDate: data.endDate ? new Date(data.endDate) : undefined,
          },
          include: {
            parent: true,
            child: true,
          },
        });
        console.log("父子关系创建成功，ID:", relationship.id);
        break;
        
      case 'SPOUSE':
        if (!data.spouse1Id || !data.spouse2Id) {
          return NextResponse.json(
            { message: '夫妻关系需要提供两人的ID' },
            { status: 400 }
          );
        }
        
        // 检查配偶关系是否已存在（考虑双向）
        const existingSpouseRelation = await prisma.relationship.findFirst({
          where: {
            type: RelationType.SPOUSE,
            OR: [
              {
                spouse1Id: data.spouse1Id,
                spouse2Id: data.spouse2Id
              },
              {
                spouse1Id: data.spouse2Id,
                spouse2Id: data.spouse1Id
              }
            ]
          }
        });

        if (existingSpouseRelation) {
          console.log(`配偶关系已存在（ID: ${existingSpouseRelation.id}），返回现有关系`);
          // 返回现有关系，而不是创建新的
          const existingWithDetails = await prisma.relationship.findUnique({
            where: { id: existingSpouseRelation.id },
            include: {
              spouse1: true,
              spouse2: true,
            },
          });
          return NextResponse.json({
            ...existingWithDetails,
            message: "配偶关系已存在，返回现有关系"
          });
        }

        relationship = await prisma.relationship.create({
          data: {
            type: RelationType.SPOUSE,
            spouse1: { connect: { id: data.spouse1Id } },
            spouse2: { connect: { id: data.spouse2Id } },
            startDate: data.startDate ? new Date(data.startDate) : undefined,
            endDate: data.endDate ? new Date(data.endDate) : undefined,
          },
          include: {
            spouse1: true,
            spouse2: true,
          },
        });
        break;
        
      case 'SIBLING':
        // 注意：Prisma schema 当前可能不支持 SIBLING 关系，这里仅作示例
        // 需要在 schema.prisma 中定义 sibling1 和 sibling2 关系
        if (!data.sibling1Id || !data.sibling2Id) {
          return NextResponse.json(
            { message: '兄弟姐妹关系需要提供两人的ID' },
            { status: 400 }
          );
        }
        // 假设 schema 中已定义 sibling1 和 sibling2
        // relationship = await prisma.relationship.create({
        //   data: {
        //     type: RelationType.SIBLING,
        //     sibling1: { connect: { id: data.sibling1Id } },
        //     sibling2: { connect: { id: data.sibling2Id } },
        //     startDate: data.startDate ? new Date(data.startDate) : undefined,
        //     endDate: data.endDate ? new Date(data.endDate) : undefined,
        //   },
        //   include: {
        //     sibling1: true,
        //     sibling2: true,
        //   },
        // });
        return NextResponse.json(
          { message: 'SIBLING 关系类型暂未完全实现' },
          { status: 501 } // Not Implemented
        );
        break;
        
      default:
        console.error(`不支持的关系类型: ${data.type}`);
        return NextResponse.json(
          { message: '不支持的关系类型' },
          { status: 400 }
        );
    }

    console.log(`关系创建成功，返回数据:`, {
      id: relationship.id,
      type: relationship.type
    });
    return NextResponse.json(relationship);
  } catch (error) {
    console.error('创建家族关系失败:', error);
    // 提供更详细的错误信息
    const errorMessage = error instanceof Error 
      ? `创建家族关系失败: ${error.message}` 
      : '创建家族关系失败';
      
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
