import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
      "@typescript-eslint": tseslint.plugin,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
      globals: globals.browser,
    },
    rules: {
      ...tseslint.configs.recommended[0].rules,
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // ✅ override AFTER spreading recommended
    },
  },
]);
