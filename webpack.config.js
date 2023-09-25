module.exports = {
    // ...other webpack configuration options...
    module: {
      rules: [
        // ...other rules...
        {
          test: /\.woff2$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // You can customize the output filename
            },
          },
        },
      ],
    },
  };
  