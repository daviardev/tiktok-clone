/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node$/, use: 'raw-loader'
    })

    !isServer && config.externals.push('canvas')

    return config
  }
}

module.exports = nextConfig
