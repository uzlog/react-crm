require("colors");
const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [new PrettierPlugin()],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "public"),
        onListening: server => {
            const { port, address } = server.listeningApp.address();

            // eslint-disable-next-line no-console
            console.log(
                "Front-end started at:".green,
                `http://${address}:${port}`.underline
            );
        },
        stats: "minimal",
        noInfo: true
    }
};
