module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb-base", "prettier"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    "babel",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "comma-dangle": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "class-methods-use-this": "off",
    "no-use-before-define": "off",
    "object-literal-sort-keys": "off"
  }
};
