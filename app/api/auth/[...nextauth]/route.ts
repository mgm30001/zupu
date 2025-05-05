import NextAuth from "next-auth/next";
import { authOptions } from "@/app/auth/authOptions";

// 创建处理程序并导出
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 