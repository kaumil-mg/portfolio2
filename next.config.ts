/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.3', '192.168.1.4', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'shrug-person-78902957.figma.site',
      },
      {
        protocol: 'https',
        hostname: 'motionsites.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.higgs.ai',
      },
    ],
  },
};

module.exports = nextConfig;