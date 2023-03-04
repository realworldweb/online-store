/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'twstg2.eu.saleor.cloud',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
