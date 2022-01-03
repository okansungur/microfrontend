const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8181,
    host: '0.0.0.0',
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cards: 'cards@http://localhost:8084/remoteEntry.js',
        
        
        //ngcontainer:'ngcontainer@http://localhost:4200/mferemoteEntry.js'
        mfe1: "mfe1@http://localhost:5000/mfe1remoteEntry.js",
        //"mfe1": "mfe1@http://localhost:4200/remoteEntry.js",

        
      },
      shared: packageJson.dependencies,
    }),
   
  ],
};

module.exports = merge(commonConfig, devConfig);
