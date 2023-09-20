/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_WEATHER_URL: process.env.NEXT_WEATHER_URL,
    NEXT_WEATHER_KEY: process.env.NEXT_WEATHER_KEY,
    NEXT_WEATHER_IMG_URL: process.env.NEXT_WEATHER_IMG_URL
    },
    
}

module.exports = nextConfig
