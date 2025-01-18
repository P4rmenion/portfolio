import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        config.resolve.alias['@styles'] = '/app/styles'

        return config
    },
}

export default nextConfig
