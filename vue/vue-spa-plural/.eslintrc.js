module.exports = {
    root: true,
    parser: 'babel-eslint',
    parseOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ]
}