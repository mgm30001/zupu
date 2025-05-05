import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { mkdir } from 'fs/promises';

// 模拟的图像分析结果数据
const simulateTreeAnalysis = () => {
  return {
    success: true,
    message: '照片解析成功',
    treeId: uuidv4(),
    members: [
      { id: '1', name: '祖先', position: { x: 100, y: 50 } },
      { id: '2', name: '长子', position: { x: 50, y: 150 } },
      { id: '3', name: '次子', position: { x: 150, y: 150 } },
      { id: '4', name: '孙子1', position: { x: 25, y: 250 } },
      { id: '5', name: '孙子2', position: { x: 75, y: 250 } },
      { id: '6', name: '孙子3', position: { x: 125, y: 250 } },
      { id: '7', name: '孙子4', position: { x: 175, y: 250 } },
    ],
    relationships: [
      { parent: '1', child: '2' },
      { parent: '1', child: '3' },
      { parent: '2', child: '4' },
      { parent: '2', child: '5' },
      { parent: '3', child: '6' },
      { parent: '3', child: '7' },
    ],
  };
};

export async function POST(request: Request) {
  try {
    // 确保上传目录存在
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'trees');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      // 目录可能已经存在，忽略错误
    }

    const formData = await request.formData();
    const treeImage = formData.get('treeImage') as File;

    if (!treeImage) {
      return NextResponse.json(
        { message: '未找到上传的图片' },
        { status: 400 }
      );
    }

    // 检查文件类型
    if (!treeImage.type.startsWith('image/')) {
      return NextResponse.json(
        { message: '只支持图片文件' },
        { status: 400 }
      );
    }

    // 生成唯一文件名
    const imageId = uuidv4();
    const fileExtension = treeImage.name.split('.').pop();
    const fileName = `${imageId}.${fileExtension}`;
    const filePath = join(uploadDir, fileName);

    // 读取文件内容
    const bytes = await treeImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 保存文件
    await writeFile(filePath, buffer);

    // 调用图像分析服务（这里模拟分析结果）
    // 在实际应用中，这里应该调用专门的图像处理API或机器学习服务
    const analysisResult = simulateTreeAnalysis();

    // 保存分析结果到数据库
    // 在这个演示中，我们只是返回模拟的分析结果
    // 在实际应用中，这里应该将分析结果保存到数据库

    return NextResponse.json({
      message: '族谱照片上传成功',
      imageUrl: `/uploads/trees/${fileName}`,
      analysis: analysisResult,
    });
  } catch (error) {
    console.error('处理族谱照片上传失败:', error);
    return NextResponse.json(
      { message: '处理族谱照片上传失败' },
      { status: 500 }
    );
  }
} 