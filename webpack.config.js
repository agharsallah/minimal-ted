var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    },
    {
     test: /\.scss$/,
     loader: 'style!css!sass?outputStyle=compressed'
    }]
  },
  sassLoader: {
  includePaths: [
    './node_modules',
    // this is required only for NPM < 3.
    // Dependencies are flat in NPM 3+ so pointing to
    // the internal grommet/node_modules folder is not needed
    './node_modules/grommet/node_modules'
  ]
},
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};

module.exports = config;
