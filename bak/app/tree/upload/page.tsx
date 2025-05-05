'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UploadTreeImagePage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 处理文件选择
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // 验证文件类型
    if (!selectedFile.type.startsWith('image/')) {
      setError('请选择图片文件');
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile);
    setError(null);

    // 创建预览
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  // 处理上传
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError('请先选择图片');
      return;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('treeImage', file);

    try {
      // 这里需要替换为实际的API端点
      const response = await fetch('/api/tree/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '上传失败');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/tree');
      }, 2000);
    } catch (err) {
      console.error('上传族谱照片失败:', err);
      setError(err instanceof Error ? err.message : '上传失败，请重试');
    } finally {
      setIsUploading(false);
    }
  };

  // 处理拖放
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files?.[0];
    if (!droppedFile) return;

    // 验证文件类型
    if (!droppedFile.type.startsWith('image/')) {
      setError('请选择图片文件');
      return;
    }

    setFile(droppedFile);
    setError(null);

    // 创建预览
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(droppedFile);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">上传族谱照片</h1>
          <Link
            href="/tree"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            返回族谱树
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-4">
                上传族谱照片，系统将自动分析照片中的成员信息，并生成交互式族谱树。
                支持的格式：JPG、PNG、GIF。
              </p>
              
              {success ? (
                <div className="text-center py-8">
                  <div className="flex items-center justify-center text-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-900">上传成功！</p>
                  <p className="text-sm text-gray-500 mt-2">正在处理族谱照片，即将跳转到族谱树页面...</p>
                </div>
              ) : (
                <form onSubmit={handleUpload} className="space-y-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-12 text-center ${
                      error ? 'border-red-300' : 'border-gray-300'
                    } ${preview ? 'border-indigo-500' : ''}`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    style={{ cursor: 'pointer' }}
                  >
                    {preview ? (
                      <div className="space-y-4">
                        <img
                          src={preview}
                          alt="族谱照片预览"
                          className="mx-auto max-h-96 max-w-full object-contain"
                        />
                        <p className="text-sm text-gray-500">点击更换图片</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 mx-auto text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-lg font-medium text-gray-900">拖放图片或点击上传</p>
                        <p className="text-sm text-gray-500">
                          支持 JPG、PNG、GIF 格式
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm text-center">{error}</div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!file || isUploading}
                      className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                        !file || isUploading
                          ? 'bg-indigo-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      {isUploading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          上传中...
                        </>
                      ) : (
                        '上传并分析'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="rounded-md bg-blue-50 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    提示：上传的照片越清晰，识别效果越好。系统会自动将照片中的人物与已有成员匹配。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 