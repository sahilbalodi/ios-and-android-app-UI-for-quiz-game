OFF = 0;
module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": OFF,
     "react/prefer-stateless-function": OFF,
     "react/forbid-prop-types": OFF,
      "react/no-unused-state": OFF,
    }
}