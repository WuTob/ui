
    module.exports = {
        entry: __dirname + "/src/js/index.js",//已多次提及的唯一入口文件
        output: {
            path: __dirname + "/assets/js",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        },
        devtool: 'eval-source-map',
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "env"
                            ]
                        }
                    },
                    exclude: /node_modules/
                }
            ]
        },
        externals: {
            jquery: 'jQuery.noConflict()' //或者jquery:'jQuery'
        }
    };