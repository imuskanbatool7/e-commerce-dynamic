/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',  // Change this to your image domain
          pathname: '/images/**',    // You can define the specific path if needed
        },
        // Add more patterns if necessary
      ],
    },
  };
  
  module.exports = nextConfig;
  