const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },{
				test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
				options: {
					name: './src/assets/[path][name].[ext]'
				}
			}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devtool: "source-map"
};
