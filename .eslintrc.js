module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["prettier"],
  rules: {
    camelcase: 0,
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { before: false, after: true }],
    "consistent-return": 0,
    curly: 0,
    "default-case": 0,
    eqeqeq: [2, "smart"],
    "func-names": 0,
    "guard-for-in": 2,
    indent: [2, 2, { SwitchCase: 1 }],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "keyword-spacing": [2, { before: true, after: true }],
    "max-len": 0,
    "new-cap": [2, { newIsCapExceptions: ["acl.memoryBackend", "acl"] }],
    "no-bitwise": 0,
    "no-caller": 2,
    "no-console": 0,
    "no-else-return": 0,
    "no-empty-class": 0,
    "no-multi-spaces": 2,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "no-spaced-func": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-use-before-define": [1, "nofunc"],
    "no-var": 0,
    "object-curly-spacing": [2, "always"],
    "one-var": [0, "never"],
    "one-var-declaration-per-line": [2, "always"],
    "padded-blocks": 0,
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "space-in-parens": [2, "never"],
    "spaced-comment": [2, "always"],
    strict: 0,
    "quote-props": 0,
    "wrap-iife": [2, "outside"],
    "vars-on-top": 0
  }
};
