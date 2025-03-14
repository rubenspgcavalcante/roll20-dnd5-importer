const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "roll20-dnd5-importer.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV ?? "production",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
