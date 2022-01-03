const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
//Domain name will be used from here

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: `products@${domain}/products/remoteEntry.js`,
        cards: `cards@${domain}/cards/remoteEntry.js`,
        
        
    // "host": "host@http://localhost:4200/remoteEntry.js",


      //  mfe1: `mfe1@${domain}/mfe1/mfe1remoteEntry.js`,
      //  ngcontainer: `ngcontainer@${domain}/ngcontainer/mferemoteEntry.js`
        //cards: `cards@${domain}/cards/remoteEntry.js`,
        //Assumption serverside we have a products and cards folders
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);