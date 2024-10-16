/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/jonathan-portfolio' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/jonathan-portfolio' : '',
}

module.exports = nextConfig
