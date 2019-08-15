module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.template.html$/,
          use: 'raw-loader'
        }
      ]
    }
  }
}