import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import css from '@eslint/css';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import globals from 'globals';

export default defineConfig([
  // JS / JSX
  {
    files: ['**/*.{js,jsx}'],
    plugins: { js },
    extends: [js.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
  },

  // React
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    extends: [pluginReact.configs.flat.recommended],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // CSS
  {
    files: ['**/*.css'],
    plugins: { css },
    extends: [css.configs.recommended],
  },

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    extends: [json.configs.recommended],
  },

  // Markdown
  {
    files: ['**/*.md'],
    plugins: { markdown },
    extends: [markdown.configs.recommended],
  },
]);
