/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'm-abdelrahman.vercel.app',
            'raw.githubusercontent.com',
            'avatars.githubusercontent.com',
            'upload.wikimedia.org'
        ]
    }
};

export default nextConfig;
