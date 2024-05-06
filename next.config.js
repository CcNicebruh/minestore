/** @type {import("next").NextConfig} */

const removeProtocol = (url) => {
    return url.replace(/(^\w+:|^)\/\//, '');
};

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'mc-heads.net'
            },
            {
                hostname: 'minotar.net'
            },
            {
                hostname: removeProtocol(process.env.NEXT_PUBLIC_API_URL)
            },
            {
                hostname: 'i.imgur.com'
            }
        ]
    },
    rewrites: async () => {
        return [
            {
                source: '/',
                destination: '/home'
            }
        ];
    }
};

module.exports = nextConfig;
