/** @type {import('next').NextConfig} */
const nextConfig = {
    resolve: {
        alias: [
          {
            find: /^~.+/,
            replacement: (val) => {
              return val.replace(/^~/, "");
            },
          },
          {
            find: './runtimeConfig', replacement: './runtimeConfig.browser',
          }
        ],
      },
}

module.exports = nextConfig
