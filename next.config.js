const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const configuration =
withBundleAnalyzer(
  withOffline(
    {
      target: 'serverless',
      transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
      // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
      // turn on the SW in dev mode so that we can actually test it
      dontAutoRegisterSw: true,
      generateInDevMode: false,
      workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'https-calls',
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      env: {
        PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
        PUSHER_NONAUTH_APP_KEY: process.env.PUSHER_NONAUTH_APP_KEY,
        TWICE_NONAUTH_APP_KEY: process.env.TWICE_NONAUTH_APP_KEY,
        TWICE_CHANNEL_NAME: process.env.TWICE_CHANNEL_NAME,
        PUSHER_CLUSTER: process.env.PUSHER_CLUSTER,
        BACKEND_SERVER: process.env.SERVER_CONNECT
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.node = {
            fs: 'empty',
            module: 'empty'
          }
        }
        return config;
      }
    }
  )
);

module.exports = configuration;
