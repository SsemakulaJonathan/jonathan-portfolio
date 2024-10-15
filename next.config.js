// const path = require('path')

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.resolve(__dirname)
//     return config
//   },
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig