const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // all options are optional
          filename: "styles.css",
          chunkFilename: "[id].css",
          ignoreOrder: true, // Enable to remove warnings about conflicting order
        }),
        new Dotenv(),
    ],
    
    entry: "./src/index.tsx",

    mode: "production",
    devtool: "source-map",
    
    // mode: "development",
    // devtool: "inline-source-map",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {        
                test: /\.css$/,        
                use: [MiniCssExtractPlugin.loader, "css-loader"]  
                // use: ["style-loader", "css-loader"]      
            },       
            {
                test: /\.(mp4|webp)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
            }
        ]
    },
    
    optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin({
            parallel: true,
            minimizerOptions: {
                preset: [
                  "default",
                  {
                    discardComments: { removeAll: true },
                  },
                ],
              },         
          }),
        ],
    },
    
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
}