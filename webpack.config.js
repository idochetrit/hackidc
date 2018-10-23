module.exports = {
  // This is the "main" file which should include all other modules
  entry: "./frontend/src/main.js",
  // Where should the compiled file go?
  output: {
    filename: "./public/bundle.js"
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
    port: 3000
  }
};
