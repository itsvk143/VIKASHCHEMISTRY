/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/test-series',
        destination: 'https://testseries-nine.vercel.app/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
