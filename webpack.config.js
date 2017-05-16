var path = require("path");
var webpack = require("webpack");
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
//var mode = require("yargs").argv.mode;
var libraryName="sparrow";
var filename="";


var plugins=[];
plugins.push(new uglifyPlugin({minimize:true})); // sparrow,min.js
filename=libraryName +".min.js";

//console.log(mode);

var config = {
  entry:path.resolve(__dirname,"./src/index.js"),
  output:{
    path:path.resolve(__dirname,"./lib"),
    filename:filename,
    library:libraryName,
    libraryTarget:"umd",
    umdNamedDefine:true
  },
  //resolve:{
//    extension:["",".js",".css",".json"]
    //root:path.resolve("./src")
////  devtool:"cheap-source-map", //测试
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:"babel-loader",
        exclude:/node_module/
      },
      {
        test:/\.js$/,
        loader:"eslint-loader",
        exclude:/node_module/
      }
    ]
  },
  plugins:plugins

}


module.exports=config
