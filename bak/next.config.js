/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.100.241:3000'
  ]
}

module.exports = nextConfig 