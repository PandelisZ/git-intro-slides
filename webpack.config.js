const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'build') // Output folder
  },
  mode: 'none',
  module: {
    rules: [
      // Include pug-loader to process the pug files
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      // Include css/style loaders to process our css files
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    // Extract our css to a seperate css file
    new ExtractTextPlugin('css/styles.css'),
    // Use HTMLWebpackPLugin with template set to our pug template.
    new HTMLWebpackPlugin({
      template: `./src/index.pug`
    })
    // new CopyWebpackPlugin([
    //   { from: '**/*', ignore: [ '*.pug' ], context: 'src' }
    // ])
  ]
}
