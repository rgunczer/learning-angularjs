module.exports = {
    "env": {
        "browser": true
    },
    "plugins": ["angular"],
    "extends": [
        "eslint:recommended",
        "plugin:angular/johnpapa"
    ],
    "rules": {
        "angular/controller-name": 0,
        "angular/file-name": 0,
        "angular/controller-as": 0,
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
        "angular": 1
    }
};