import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "off", // 🚫 turn off unused variables warning
      "no-unused-imports": "off", // 🚫 if you're using a plugin like eslint-plugin-unused-imports
    },
  },
  pluginReact.configs.flat.recommended,
]);
