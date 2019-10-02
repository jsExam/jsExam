module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended", 
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ]
    }
};