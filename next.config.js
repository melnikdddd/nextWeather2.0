/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    }
}

module.exports = nextConfig
