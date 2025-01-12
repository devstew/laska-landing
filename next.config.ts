// next.config.js

const nextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test('.svg')
        );

        // Exclude SVGs from the default file loader
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        // Use @svgr/webpack to import SVGs as components
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
