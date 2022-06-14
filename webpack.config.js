const path = require('path');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
 
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },

  devServer: {
    static: path.join(__dirname, "./"),
    compress: true,
    hot: true,
    port: 9001,
    open: true,
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    // }),
    new SentryPlugin({
      release: "sentry-demo@1.0.0",
      include: "./lib",
    }),
  ],
};