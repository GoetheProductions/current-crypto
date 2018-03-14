module.exports = {
  name: 'current crypto',
  output: {
    filename: 'bundle.js',
  },

  entry: './app/index.js',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  mode: "development"
};
