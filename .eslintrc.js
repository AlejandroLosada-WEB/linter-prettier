module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2], // Establece la indentación a 2 espacios
    semi: ["error", "always"], // Requiere el uso de punto y coma al final de las declaraciones
    quotes: ["error", "double"], // Requiere el uso de comillas dobles para las cadenas
    camelcase: ["error", { properties: "always" }], // Requiere el uso de camelCase para variables y propiedades
    "no-unused-vars": "warn", // Advierte sobre variables declaradas pero no utilizadas
    "no-console": "warn", // Advierte sobre el uso de sentencias console.log()
  },
};
