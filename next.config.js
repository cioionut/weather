module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./nodejs-scripts/generate-sitemap');
    }

    return config;
  }
};