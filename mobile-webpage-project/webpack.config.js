const Dotenv = require('dotenv-webpack');
const path = require('path');


module.exports = {
  entry: './src/app.js', // <-- Add this line
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(),
    // ...other plugins...
  ],
};