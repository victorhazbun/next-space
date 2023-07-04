/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_DOMAIN: 'https://dsp-profit.vercel.app'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'accounts-cdn.9gag.com',
        port: '',
        pathname: '/media/avatar/**',
      },
    ],
  },
}

module.exports = nextConfig
