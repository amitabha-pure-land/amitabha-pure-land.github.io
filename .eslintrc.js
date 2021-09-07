module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "standard", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-undef": "off",
  },
};
