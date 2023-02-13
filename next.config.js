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
};

module.exports = nextConfig;
