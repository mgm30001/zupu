import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/auth/authOptions';

// 定义用户角色枚举，与Prisma模型匹配
enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR'
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // 验证管理员权限
  // if (session?.user?.role !== "admin") {
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  try {
    const { email, role } = await req.json();

    if (!email || !role) {
      return NextResponse.json({ message: 'Email and role are required' }, { status: 400 });
    }

    if (role !== UserRole.USER && role !== UserRole.ADMIN && role !== UserRole.EDITOR) {
      return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        role: role,
      },
    });

    return NextResponse.json({ message: 'User role updated successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to update user role' }, { status: 500 });
  }
}