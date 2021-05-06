import path from 'path';
import webpack from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

type ConfiguratonMode = 'development' | 'production' | 'none';

const mode = <ConfiguratonMode>process.env.NODE_ENV;

const config: webpack.Configuration = {
    mode: mode,
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name].js',
        publicPath: '/',
    },
    entry: './src/index.tsx',
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
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[path][name].[ext]' }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets/',
                    to: path.resolve(__dirname, 'dist/public')
                }
            ]
        }),

    ],
    devtool: mode === 'development' ? 'inline-source-map' : undefined,
};

export default config;
