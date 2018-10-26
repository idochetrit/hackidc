const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // This is the "main" file which should include all other modules
  entry: "./frontend/src/main.js",
  // Where should the compiled file go?
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: "babel-loader",
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader"
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/api/**": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true
      }
    },
    // Open the browser window, set to false if you are in a headless browser environment.
    // open: false,
    contentBase: path.join(__dirname, "/public"),
    watchContentBase: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
