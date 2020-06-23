module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    //    "eslint:recommended"
  ],
  "rules": {
    "no-var": "error",
    "no-console": "off",
    "no-empty": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-inferrable-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
