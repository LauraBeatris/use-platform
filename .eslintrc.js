module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@jungsoft/eslint-config/react",
    "@jungsoft/eslint-config/typescript",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-var": {
      const: "never",
    },
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
