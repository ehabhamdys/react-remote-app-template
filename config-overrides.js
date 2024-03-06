const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const fs = require('fs');

const { override, addWebpackPlugin } = require('customize-cra');

const publicPathPlugin = (config) => {
  // TODO: Set the public path to the correct value
  config.output.publicPath = '/';
  return config;
};

function saveConfig(config, filename) {
  const jsonString = JSON.stringify(config);
  fs.writeFile(filename, jsonString, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Object saved to file successfully!');
  });
}

const printConfig = (config) => {
  saveConfig(config, 'config.json');
  return config;
};

const moduleFederationConfig = {
  // TODO: Set the remote app name
  name: 'app_name',
  filename: 'remoteEntry.js',
  remotes: {},
  exposes: {
    './GlobalApp': './src/GlobalApp.tsx'
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom']
    }
  }
};

module.exports = {
  webpack: override(
    publicPathPlugin,
    addWebpackPlugin(new ModuleFederationPlugin(moduleFederationConfig)),
  ),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      
      // TODO: Index must match the public path
      config.historyApiFallback = { disableDotRule: true, index: '/' }; // true 
      config.host = 'localhost';
      config.client.webSocketURL.hostname = 'localhost';
      config.client.webSocketURL.port = '3000';
      saveConfig(config, 'devServer.config.json');
      return config;
    };
  },
  printConfig
};
