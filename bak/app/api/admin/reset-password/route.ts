import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401 }
    );
  }

  // 验证用户是否是管理员 (这里假设管理员邮箱为 admin@zupu.com)
  if (session.user.email !== 'admin@zupu.com') {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized - Admin access required' }),
      { status: 403 }
    );
  }

  try {
    const hashedPassword = await bcrypt.hash('12131213mm', 10);

    const adminUser = await prisma.user.update({
      where: {
        email: 'admin@zupu.com',
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Admin password reset successfully' }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
