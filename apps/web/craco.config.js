/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
/**
 * add uniswap modules to the transpilation process of this application
 * normally I would use a build process inside the module if I were to publish the module
 * but out of scope for this assignment
 */
const absolutePath = path.join(__dirname, "../../packages/uniswap");
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePath];
      }
      return {
        ...webpackConfig,
        ignoreWarnings: [
          function ignoreSourcemapsloaderWarnings(warning) {
            return (
              warning.module &&
              warning.module.resource.includes("node_modules") &&
              warning.details &&
              warning.details.includes("source-map-loader")
            );
          },
        ]
      }
    }
  }
};
