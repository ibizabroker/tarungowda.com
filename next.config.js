const path = require('path')
const { createContentlayerPlugin } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias['contentlayer/generated'] = path.resolve(
      __dirname,
      '.contentlayer/generated',
    )
    return config
  },
}

const withContentlayer = createContentlayerPlugin({
  configPath: path.resolve(__dirname, 'contentlayer.config.ts'),
})

module.exports = withContentlayer(nextConfig)