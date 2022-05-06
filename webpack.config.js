const htmlwebpackplugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin.js");
const path = require("path");
const {CleanWebpackPlugin}= require("clean-webpack-plugin");
const Webpack = require('webpack');
module.exports = {
    mode:'development',
    entry:{
        index:path.resolve(__dirname,"./src/index.js")
    },
    output:{
        path:path.resolve(__dirname,"./dist")
    },
    devServer:{
        port:8081,
        host: "localhost",
        hot:true,
        open:true,
    },
    module:{
        rules:[
            
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns:'usage',
                                        "corejs": 2
                                    }
                                ]
                            ]
                        }

                    }
                ]
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.(css|scss)/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    "postcss-preset-env",
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
               test:/\.(png|jpe?g|gif|svg|webp)$/,
               use:[
                   {
                       loader:'url-loader',
                        options:{
                            name: '[name].[hash].[ext]',
                            outputPath: 'images',
                            limit:4000,
                            esModule:false
                        }
                   }
               ] 
            }
        ]
    },
    plugins:[
         new htmlwebpackplugin({
             template:path.resolve(__dirname,"./public/index.html")
         }),
         
         new VueLoaderPlugin(),
         new CleanWebpackPlugin()
    ],
   
}