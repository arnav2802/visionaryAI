/** @type {import('next').NextConfig} */

const nextConfig = {
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ''
            }
        ]
    }
};

export default nextConfig;
