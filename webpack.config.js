const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'build'), // Output folder
    filename: 'script.js',
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
    new ExtractTextPlugin('styles.css'),
    // Use HTMLWebpackPLugin with template set to our pug template.
    new HTMLWebpackPlugin({
      template: `./src/index.pug`
    }),
    new HTMLWebpackPlugin({
      filename: 'diagrams/example.html',
      template: `./src/diagrams/example.pug`
    }),
    new CopyWebpackPlugin([
      { from: 'public/**/*', ignore: [ '*.pug' ], context: 'src' }
    ])
  ]
}
