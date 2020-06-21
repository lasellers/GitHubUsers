module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "no-var": "error",
    "no-console": "warn",
    "no-empty": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error"
  }
}
