const { relative, resolve, sep } = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const path = require("path")
const NsVueTemplateCompiler = require("nativescript-vue-template-compiler")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const nativescriptTarget = require("nativescript-dev-webpack/nativescript-target")
const babelLoader = {
    loader: "babel-loader",
    options: {
        cacheDirectory: true,
        presets: [
            [
                "@babel/preset-env",
                {
                    modules: false
                    // loose: true
                }
            ]
        ]
    }
}
const nsWebpack = require("nativescript-dev-webpack")
var config = {
    entry: resolve("src/plugin.ts"),
    context: resolve("src"),
    mode: "production",
    // stats: "verbose",
    // target: "node",
    output: {
        pathinfo: false,
        path: resolve("plugin"),
        libraryTarget: "commonjs2",
        filename: "[name].js",
        globalObject: "global"
    },
    devtool: "none",
    resolve: {
        extensions: [".vue", ".ts", ".js", ".tsx", ".scss", ".css"]
    },
    node: {
        // Disable node shims that conflict with NativeScript
        console: false,
        process: false,
        http: false,
        timers: false,
        setImmediate: false,
        fs: "empty",
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    // babelLoader,
                    {
                        loader: "ts-loader",
                        options: {
                            // transpileOnly: true,
                            configFile: resolve("tsconfig.json"),
                            // appendTsSuffixTo: [/\.vue$/],
                            allowTsInNodeModules: false // wanted?
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: [
                    babelLoader,
                    {
                        loader: "string-replace-loader",
                        options: {
                            search: "\\/\\*\\* @class \\*\\/",
                            replace: "/*@__PURE__*/",
                            flags: "g"
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    compiler: NsVueTemplateCompiler
                }
            }
        ]
    },
    externals: {
        "nativescript-material-button": "nativescript-material-button",
        "nativescript-material-cardview": "nativescript-material-cardview",
        "tns-core-modules/application": "tns-core-modules/application",
        "tns-core-modules/ui/page": "tns-core-modules/ui/page",
        "vue-property-decorator": "vue-property-decorator",
        "vue-class-component": "vue-class-component",
        tslib: "tslib",
        vue: "vue",
        "nativescript-vue": "nativescript-vue"
    },
    plugins: [
        new nsWebpack.PlatformFSPlugin({
            platform: "android",
            platforms: ["ios", "android"]
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = config
