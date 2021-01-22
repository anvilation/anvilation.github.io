const path = require('path');
module.exports = [
  {
    entry: {
      index: './src/index.ts'
    },
    output: {
      filename: '[name].es5.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/preset-typescript", [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "browsers": ["> 0.5%", "last 2 versions", "not dead", "IE 11"]
                    },
                    "useBuiltIns": "usage",
                    "corejs": 3
                  }
                ]
              ],
              "plugins": ["@babel/plugin-proposal-class-properties"]
            }
          }
        }
      ]
    },
    plugins: [],
    devServer: {
      openPage: '/dist',
      compress: true,
      port: 9000,
    }
  },
  {
    entry: {
      index: './src/index.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/preset-typescript", [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "browsers": ["Edge >= 16", "Firefox >= 60", "Chrome >= 61", "Safari >= 11", "Opera >= 48"]
                    },
                    "useBuiltIns": "usage",
                    "corejs": 3
                  }
                ]
              ],
              "plugins": ["@babel/plugin-proposal-class-properties"]
            }
          }
        }
      ]
    }
  }
];
