/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.shopify.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
