/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["uploads-ssl.webflow.com", "c.tenor.com"],

    },
}

module.exports = nextConfig