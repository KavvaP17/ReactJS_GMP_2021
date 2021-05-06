import path from 'path';
import nodeExternals from 'webpack-node-externals';

const serverConfig = {
    mode: "development",
    target: "node",
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()],
    entry: {
        "index.js": path.resolve(__dirname, "SSR/index.js"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

export default serverConfig;
