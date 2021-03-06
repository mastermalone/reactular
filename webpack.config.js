const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
  entry: __dirname + '/src/app/index.ts', // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    publicPath: '/', // public URL of the output directory when referenced in a browser
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        // use: 'babel-loader',
        use: ['source-map-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.ts$|.tsx?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css/i,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss/i,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.html', '.css', '.scss'],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + '/src/public/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    // configuration for webpack-dev-server
    inline: true,
    hot: true,
    contentBase: './src', //source of static assets
    watchContentBase: true,
    // publicPath: './src/public/',
    port: 7700, // port to run dev-server
  },
};
