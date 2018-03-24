const debug = process.env.NODE_ENV !== "production";
const webpack = require( "webpack" );
const path = require( "path" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

const plugins = [
    new webpack.optimize.CommonsChunkPlugin( {
        name: "lib",
        minChunks: Infinity,
        filename: "[name].bundle.js",
    } ),
    new ExtractTextPlugin( {
        filename: "[name].bundle.css",
    } ),
];

if ( !debug ) {
    plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin( { mangle: false, sourcemap: false } ),
    );
}

const scssRules = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract( {
        use: [ {
            loader: "css-loader",
            options: {
                url: false,
                autoprefixer: false,
                minimize: true,
                // sourceMap: true
            },
        }, {
            loader: "sass-loader",
            options: {
                // sourceMap: true,
                includePaths: [ "styles" ],
            },
        } ],
        fallback: "style-loader",
    } ),
};

module.exports = {
    context: path.join( __dirname, "src" ),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./js/App.js",
        lib: [ "react", "react-dom" ],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract( {
                    fallback: "style-loader",
                    use: "css-loader",
                } ),
            },
            // {
            //     test: /\.jsx?$/,
            //     enforce: "pre",
            //     exclude: /(node_modules|bower_components)/,
            //     use: [
            //         {
            //             loader: "eslint-loader",
            //             options: {
            //                 failOnWarning: false,
            //                 failOnError: true,
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                /* query: {
                    presets: [ "react", "es2015", "stage-0" ],
                }, */
            },
            scssRules,
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        publicPath: "/",
        filename: "[name].bundle.js",
    },
    plugins,
};
