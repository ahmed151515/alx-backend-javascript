import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 6,
    }
  },
  pluginJs.configs.recommended,
];