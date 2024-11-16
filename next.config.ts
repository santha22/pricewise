// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: true,
//     serverComponentsExternalPackages: ['mongoose']
//   },
//   images: {
//     domains: ['m.media-amazon.com']
//   }
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}
  },
  serverExternalPackages: ['mongoose'], // moved from experimental
  images: {
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig;
