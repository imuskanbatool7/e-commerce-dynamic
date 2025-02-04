/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'd3t32hsnjxo7q6.cloudfront.net',  // Use the actual hostname for your images
          pathname: '/i/**',    // Adjust the path pattern if needed
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  