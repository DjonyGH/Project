const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    resolve: {
        extention: ['js', 'jsx', 'ts', 'tsx', 'json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[ts]sx?$/,
            use: ['ts-loader']
        }]
    }
}