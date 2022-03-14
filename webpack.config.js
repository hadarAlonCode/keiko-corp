const path = require("path");
const glob = require("glob");

module.exports = {
    mode: 'production',
    entry: glob.sync('./src/js/*.js').reduce(function (obj, el) {
        if (obj['main']) obj['main'].push(el)
        else obj['main'] = []
        return obj
    }, {}),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    resolve: {
        preferRelative: true,
    },
};