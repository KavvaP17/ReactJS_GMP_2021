module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack/webpack.dev')
    : require('./webpack/webpack.prod');