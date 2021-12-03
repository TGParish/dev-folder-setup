const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // JS
  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'app.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../'),
  },

  module: {
    rules: [
      {
        test: /\.(sc|c)ss/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ]
};