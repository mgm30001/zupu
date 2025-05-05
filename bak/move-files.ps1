# 移动 src 目录下的所有文件到根目录
Move-Item -Path "src\*" -Destination "." -Force

# 删除空的 src 目录
Remove-Item -Path "src" -Force 