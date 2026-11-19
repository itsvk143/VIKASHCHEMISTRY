/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/test-series',
        destination: 'https://testseries-nine.vercel.app/',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacypolicy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
