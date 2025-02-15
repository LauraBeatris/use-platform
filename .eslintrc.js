module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@jungsoft/eslint-config/react",
    "@jungsoft/eslint-config/typescript",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "one-var": [2, {
      const: "never",
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [
          ".ts",
          ".tsx",
        ],
      },
    },
  },
};
