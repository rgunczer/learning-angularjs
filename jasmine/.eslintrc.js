module.exports = {
    "env": {
        "browser": true,
        "jasmine": true,
        "amd": true
    },
    "plugins": ['jasmine', 'angular'],
    "extends": [
        "eslint:recommended",
        "plugin:jasmine/recommended"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        'module': false,
        'inject': false
    }
};