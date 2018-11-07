module.exports = {
  entry: ['@babel/polyfill', './client/index.js'],
  mode: 'development',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
