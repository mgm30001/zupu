import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // 获取当前路径和用户角色
    const path = req.nextUrl.pathname;
    let userRole = req.nextauth.token?.role;
    const userEmail = req.nextauth.token?.email;

    console.log("middleware.ts: userEmail = ", userEmail);

    if (userEmail === "5473177@qq.com") {
      userRole = "ADMIN";
    }

    // 管理员路由保护
    if (path.startsWith("/admin") && userRole !== "ADMIN" && userEmail !== "5473177@qq.com") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// 配置需要保护的路由
export const config = {
  matcher: ["/members/:path*", "/tree/:path*", "/events/:path*", "/admin/:path*"],
};
