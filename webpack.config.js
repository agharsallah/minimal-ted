var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'source-map',
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
    plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [    {
            test: /\.scss$/,
            loaders: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },{
      test: /\.css$/,
      loaders: [
        "style-loader",
        "css-loader"
      ]
    },
          {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }
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


module.exports = config;
