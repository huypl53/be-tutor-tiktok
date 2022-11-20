module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    "import/extensions": ["off", "never"],
    "import/no-extraneous-dependencies": ["off", "never"],
    "import/no-unresolved": 0,
    "import/prefer-default-export": "off",
    "comma-dangle": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
      },
    ],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
      },
    ],
    "operator-linebreak": "off",
  },
};
