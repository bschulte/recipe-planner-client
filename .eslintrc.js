module.exports = {
  root: true,

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },

  env: {
    browser: true
  },

  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential", "airbnb-base"],

  // required to lint *.vue files
  plugins: ["vue"],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  // add your custom rules here
  rules: {
    "prefer-promise-reject-errors": "off",
    "comma-dangle": "off",
    quotes: "off",
    "no-param-reassign": "off",
    "import/first": "off",
    "arrow-parens": "off",
    "import/no-cycle": "off",
    "import/named": "error",
    "no-plusplus": "off",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "prefer-promise-reject-errors": "off",
    "comma-dangle": "off",
    "no-underscore-dangle": "off",
    "space-before-function-paren": "off",
    "func-names": "off",
    "implicit-arrow-linebreak": "off",
    "max-len": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    indent: "off",

    // allow console.log during development only
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
