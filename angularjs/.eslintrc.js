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
        "no-console": 0,
        "angular/controller-name": 0,
        "angular/file-name": 0,
        "angular/controller-as": 0,
        "angular/no-service-method": 0,
        "angular/no-run-logic": 0,
        "angular/controller-as-route": 0,
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