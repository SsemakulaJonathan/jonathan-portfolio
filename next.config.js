/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_BASE_PATH || ''
    : '',
  basePath: process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_PATH || ''
    : '',
}

module.exports = nextConfig
