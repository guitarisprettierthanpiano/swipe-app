const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
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
                use: ["style-loader", "css-loader"]      
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
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [new Dotenv()],
}