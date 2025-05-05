import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  // 验证管理员权限
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { newPassword } = await req.json();
    
    if (!newPassword || newPassword.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters' }, 
        { status: 400 }
      );
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(newPassword, 10);
    } catch (error) {
      console.error("Error hashing password:", error);
      return NextResponse.json({ message: 'Failed to hash password' }, { status: 500 });
    }

    const adminUser = await prisma.user.findUnique({
      where: {
        email: process.env.ADMIN_EMAIL || 'admin@zupu.com',
      },
    });

    if (!adminUser) {
      return NextResponse.json({ message: 'Admin user not found' }, { status: 404 });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@zupu.com';

    const updatedAdminUser = await prisma.user.update({
      where: {
        email: adminEmail,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Admin password reset successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to reset admin password' }, { status: 500 });
  }
}
