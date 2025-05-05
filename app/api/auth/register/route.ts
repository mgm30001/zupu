import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { UserRole } from '@/generated/prisma';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    
    // 验证必填字段
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: '邮箱、密码和姓名为必填项' },
        { status: 400 }
      );
    }

    // 检查邮箱是否已被注册
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: '该邮箱已被注册' },
        { status: 400 }
      );
    }

    // 对密码进行哈希处理
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 为特定邮箱设置EDITOR角色
    let role: UserRole = UserRole.USER;
    if (email === '5473177@qq.com') {
      role = UserRole.EDITOR;
    }

    // 创建新用户
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    // 不返回密码
    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    console.error('注册失败:', error);
    return NextResponse.json(
      { message: '注册失败' },
      { status: 500 }
    );
  }
} 