/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "storage.googleapis.com",
            "img.waz.de",
            "i1.sndcdn.com",
            "news.bangerz-army.com",
            "www.tomorrowland.com",
            "localhost",
            "upload.wikimedia.org",
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
