module.exports = {  
    entry: './src/app.js',  //入口文件
    output: {  //输出文件路径设置
        path: __dirname,  
        filename: './dist/app.bundle.js',  
    },  
    module: {  
        loaders: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            loader: 'babel-loader'  
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]  
    }  
}  