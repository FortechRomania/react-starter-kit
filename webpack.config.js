const debug = process.env.NODE_ENV !== "production";
const webpack = require( "webpack" );
const path = require( "path" );

module.exports = {
    context: path.join( __dirname, "src" ),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./js/App.js",
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint",
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: [ "react", "es2015", "stage-0" ],
                    plugins: [ "react-html-attrs", "transform-decorators-legacy", "transform-class-properties" ],
                },
            },
        ],
    },
    eslint: {
        failOnWarning: false,
        failOnError: true,
    },
    output: {
        path: `${ __dirname }/src/`,
        filename: "bundle.js",
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin( { mangle: false, sourcemap: false } ),
    ],
};
