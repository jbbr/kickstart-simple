var webpack = require('webpack');

var babelSettings = { stage: 0 };

if (process.env.NODE_ENV !== 'production') {
  babelSettings.plugins = ['typecheck'];
}

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-collector!css' },
      { test: /\.scss$/, loader: 'style-collector!css!sass' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  }
};
