import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Member, RelationType } from '@/generated/prisma';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

interface TreeNode {
  id: string;
  name: string;
  gender: string;
  birthDate?: string;
  deathDate?: string;
  children?: TreeNode[];
  uniqueLabel?: string;
}

// 将成员数据格式化为树形结构
function buildFamilyTree(rootMember: Member, members: Member[], relationships: any[]): TreeNode {
  // 创建一个更详细的标识符，用于区分相同名字的节点
  const birthYear = rootMember.birthDate 
    ? new Date(rootMember.birthDate).getFullYear() 
    : '?';
  
  // 添加性别信息和ID前几位到标识
  const genderMark = rootMember.gender === 'MALE' ? '♂' : rootMember.gender === 'FEMALE' ? '♀' : '?';
  const idShort = rootMember.id.substring(0, 4);
  
  const uniqueLabel = `${rootMember.name} ${genderMark} (${birthYear}) #${idShort}`;
  
  const node: TreeNode = {
    id: rootMember.id,
    name: rootMember.name,
    gender: rootMember.gender,
    birthDate: rootMember.birthDate ? new Date(rootMember.birthDate).toISOString().split('T')[0] : undefined,
    deathDate: rootMember.deathDate ? new Date(rootMember.deathDate).toISOString().split('T')[0] : undefined,
    uniqueLabel: uniqueLabel,
    children: [],
  };

  try {
    // 查找当前成员的子女关系
    const childRelations = relationships.filter(
      rel => rel.type === 'PARENT_CHILD' && rel.parentId === rootMember.id
    );

    console.log(`成员 ${rootMember.name}(${rootMember.id}) 的子女关系数量: ${childRelations.length}`);

    // 对子女关系进行更详细的排序
    const sortedChildRelations = [...childRelations].sort((a, b) => {
      const childA = members.find(m => m.id === a.childId);
      const childB = members.find(m => m.id === b.childId);
      
      if (!childA || !childB) return 0;
      
      // 首先按照性别排序（通常男性在前，女性在后）
      if (childA.gender !== childB.gender) {
        return childA.gender === 'MALE' ? -1 : 1;
      }
      
      // 然后按照出生日期排序
      if (childA.birthDate && childB.birthDate) {
        return new Date(childA.birthDate).getTime() - new Date(childB.birthDate).getTime();
      }
      
      // 如果缺少出生日期或出生日期相同，则按照名字排序
      return childA.name.localeCompare(childB.name);
    });

    // 添加去重逻辑，确保每个子女ID只出现一次
    const uniqueChildIds = new Set<string>();
    const uniqueChildRelations = sortedChildRelations.filter(relation => {
      if (uniqueChildIds.has(relation.childId)) {
        console.log(`检测到重复的子女ID: ${relation.childId}，跳过该关系`);
        return false;
      }
      uniqueChildIds.add(relation.childId);
      return true;
    });

    console.log(`去重后子女关系数量: ${uniqueChildRelations.length}`);

    // 对于每个子女关系，递归构建子树
    if (uniqueChildRelations.length > 0) {
      node.children = uniqueChildRelations.map(relation => {
        const childMember = members.find(m => m.id === relation.childId);
        if (childMember) {
          return buildFamilyTree(childMember, members, relationships);
        }
        console.warn(`未找到子女成员ID: ${relation.childId}`);
        return null;
      }).filter(Boolean) as TreeNode[];
    }
  } catch (error) {
    console.error(`构建节点 ${rootMember.name}(${rootMember.id}) 的子树时出错:`, error);
    // 出错时仍然返回当前节点，但不包含子节点
    node.children = [];
  }

  return node;
}

// 查找最老的成员作为根节点
function findRootMember(members: Member[], relationships: any[]): Member | null {
  try {
    // 找出没有父母关系的成员
    const membersWithoutParents = members.filter(member => {
      return !relationships.some(
        rel => rel.type === 'PARENT_CHILD' && rel.childId === member.id
      );
    });

    console.log(`找到 ${membersWithoutParents.length} 个没有父母的成员`);

    // 如果有多个没有父母的成员，选择出生日期最早的一个
    if (membersWithoutParents.length > 0) {
      const sortedMembers = membersWithoutParents.sort((a, b) => {
        if (!a.birthDate) return 1;
        if (!b.birthDate) return -1;
        return new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime();
      });
      
      console.log(`选择没有父母的最早出生成员作为根节点: ${sortedMembers[0].name}`);
      return sortedMembers[0];
    }

    // 如果所有人都有父母关系（可能是循环关系），则选择最老的成员
    const sortedAllMembers = members.sort((a, b) => {
      if (!a.birthDate) return 1;
      if (!b.birthDate) return -1;
      return new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime();
    });
    
    console.log(`所有成员都有父母关系，选择最早出生成员作为根节点: ${sortedAllMembers[0]?.name || '未找到'}`);
    return sortedAllMembers[0];
  } catch (error) {
    console.error('查找根成员时出错:', error);
    // 出错时尝试返回第一个成员作为根节点
    if (members.length > 0) {
      console.log(`出错后选择第一个成员作为根节点: ${members[0].name}`);
      return members[0];
    }
    return null;
  }
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    console.log('未授权访问族谱树API');
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    // 获取查询参数，如果指定了根成员ID
    const { searchParams } = new URL(request.url);
    const rootId = searchParams.get('rootId');
    console.log('族谱树API请求参数 rootId:', rootId);

    // 获取所有成员
    console.log('开始查询所有成员');
    const members = await prisma.member.findMany();
    console.log(`成功获取成员数据，共 ${members.length} 条记录`);

    if (members.length === 0) {
      console.log('警告：成员数据为空');
      return NextResponse.json(
        { 
          id: "root",
          name: "族谱为空",
          gender: "OTHER",
          message: '没有找到任何成员数据'
        },
        { status: 200 } // 返回200但发送一个特殊的节点
      );
    }

    // 获取所有关系
    console.log('开始查询所有关系');
    const relationships = await prisma.relationship.findMany({
      select: {
        id: true,
        type: true,
        parentId: true,
        childId: true,
        spouse1Id: true,
        spouse2Id: true,
      },
    });
    console.log(`成功获取关系数据，共 ${relationships.length} 条记录`);

    if (relationships.length === 0) {
      console.log('警告：关系数据为空');
      
      // 虽然没有关系数据，但我们仍然可以返回单个节点
      const firstMember = members[0];
      return NextResponse.json({
        id: firstMember.id,
        name: firstMember.name,
        gender: firstMember.gender,
        birthDate: firstMember.birthDate ? new Date(firstMember.birthDate).toISOString().split('T')[0] : undefined,
        deathDate: firstMember.deathDate ? new Date(firstMember.deathDate).toISOString().split('T')[0] : undefined,
        children: []
      });
    }

    let rootMember;
    
    if (rootId) {
      // 如果指定了根成员ID，使用该成员作为根节点
      rootMember = members.find(m => m.id === rootId);
      console.log('使用指定根节点:', rootMember?.name || '未找到指定根节点');
      
      if (!rootMember) {
        return NextResponse.json(
          { message: '未找到指定的根成员' },
          { status: 404 }
        );
      }
    } else {
      // 否则查找最合适的根节点
      rootMember = findRootMember(members, relationships);
      console.log('自动选择根节点:', rootMember?.name || '未找到合适根节点');
    }

    if (!rootMember) {
      console.log('错误：未找到合适的根成员');
      // 返回一个简单树结构，避免前端报错
      return NextResponse.json({
        id: "root",
        name: "未找到根成员",
        gender: "OTHER",
        children: []
      });
    }

    // 构建家族树
    console.log('开始构建家族树');
    const familyTree = buildFamilyTree(rootMember, members, relationships);
    console.log('家族树构建完成，根节点:', familyTree.name);
    
    // 添加节点计数
    const countNodes = (node: TreeNode): number => {
      if (!node) return 0;
      let count = 1;
      if (node.children) {
        node.children.forEach(child => {
          count += countNodes(child);
        });
      }
      return count;
    };
    
    const nodeCount = countNodes(familyTree);
    console.log(`返回族谱树包含 ${nodeCount} 个节点`);

    return NextResponse.json(familyTree);
  } catch (error) {
    console.error('获取族谱树数据失败:', error);
    // 返回一个紧急树结构
    return NextResponse.json({
      id: "error_root",
      name: "数据加载出错（紧急显示）",
      gender: "OTHER",
      error: error instanceof Error ? error.message : String(error),
      children: [
        {
          id: "error_child",
          name: "请联系管理员",
          gender: "OTHER",
        }
      ]
    });
  }
}
