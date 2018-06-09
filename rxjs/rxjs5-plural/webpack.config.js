module.exports = {
    mode: 'development',
    entry: "./main",
    module: {
        rules: [
            {
                test: /.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: "app.js"
    }
}