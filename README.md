# 族谱管理系统

这是一个使用Next.js和Prisma开发的族谱管理系统，用于管理和展示家族族谱信息。

## 主要功能

- 成员管理：添加、编辑、删除家族成员
- 关系管理：定义成员之间的父子、兄弟等关系
- 族谱树展示：多种视图展示族谱结构，包括水平和垂直布局
- 成员搜索：快速查找家族成员
- 用户认证：安全的用户登录和权限管理

## 技术栈

- **前端**: Next.js, React, Tailwind CSS, D3.js
- **后端**: Next.js API Routes
- **数据库**: Prisma ORM, SQLite (可替换为其他数据库)
- **认证**: NextAuth.js

## 安装和运行

1. 克隆仓库
   ```
   git clone https://github.com/mgm30001/zupu.git
   cd zupu
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 设置环境变量
   创建`.env`文件并添加以下内容：
   ```
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. 初始化数据库
   ```
   npx prisma migrate dev
   ```

5. 启动开发服务器
   ```
   npm run dev
   ```

6. 访问 `http://localhost:3000` 查看应用

## 族谱树功能说明

族谱树使用D3.js实现，支持以下功能：

- 缩放和平移查看
- 水平和垂直布局切换
- 根据成员名称长度自动调整节点大小
- 支持导出为图片
- 支持通过搜索定位到特定成员

## 贡献指南

欢迎提交问题和功能请求。如果您想贡献代码，请遵循以下步骤：

1. Fork 仓库
2. 创建您的特性分支 `git checkout -b feature/amazing-feature`
3. 提交您的更改 `git commit -m 'Add some amazing feature'`
4. 推送到分支 `git push origin feature/amazing-feature`
5. 创建一个 Pull Request
