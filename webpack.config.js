const { relative, resolve, sep } = require('path');
const NsVueTemplateCompiler = require('nativescript-vue-template-compiler');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nsWebpack = require('@nativescript/webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    // loose: true
                },
            ],
        ],
    },
};
const config = {
    entry: {
        main: resolve('src/plugin.ts'),
        style: resolve('src/style/style.scss'),
    },
    context: resolve('src'),
    mode: 'development',
    // stats: "verbose",
    // target: "node",
    // watch:true,
    output: {
        pathinfo: false,
        path: resolve('plugin'),
        libraryTarget: 'commonjs2',
        filename: '[name].js',
        globalObject: 'global',
    },
    devtool: 'none',
    resolve: {
        modules: [resolve(__dirname, 'node_modules/@nativescript/core'), resolve(__dirname, 'node_modules'), 'node_modules/@nativescript/core', 'node_modules'],
        extensions: ['.vue', '.ts', '.js', '.tsx', '.scss', '.css'],
    },
    node: {
        // Disable node shims that conflict with NativeScript
        console: false,
        process: false,
        http: false,
        timers: false,
        setImmediate: false,
        fs: 'empty',
        __dirname: false,
    },
    // optimization: {
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    //   },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    // babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {
                            // transpileOnly: true,
                            configFile: resolve('tsconfig.json'),
                            // appendTsSuffixTo: [/\.vue$/],
                            allowTsInNodeModules: false, // wanted?
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: [
                    babelLoader,
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '\\/\\*\\* @class \\*\\/',
                            replace: '/*@__PURE__*/',
                            flags: 'g',
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compiler: NsVueTemplateCompiler,
                },
            },
        ],
    },
    externals: {
        'nativescript-material-core': 'nativescript-material-core',
        'nativescript-material-core/core': 'nativescript-material-core/core',
        'nativescript-material-button': 'nativescript-material-button',
        'nativescript-material-cardview': 'nativescript-material-cardview',
        'nativescript-material-button/vue': 'nativescript-material-button/vue',
        'nativescript-material-cardview/vue': 'nativescript-material-cardview/vue',
        '@nativescript/core/application': '@nativescript/core/application',
        '@nativescript/core/ui/page': '@nativescript/core/ui/page',
        'vue-property-decorator': 'vue-property-decorator',
        'vue-class-component': 'vue-class-component',
        tslib: 'tslib',
        vue: 'vue',
        'nativescript-vue': 'nativescript-vue',
    },
    plugins: [
        new nsWebpack.PlatformFSPlugin({
            platform: 'android',
            platforms: ['ios', 'android'],
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};

module.exports = config;
