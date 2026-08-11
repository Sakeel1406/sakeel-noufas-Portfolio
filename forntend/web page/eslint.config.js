import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Global ignore patterns for build output and dependencies
  {
    ignores: ['dist', 'node_modules', 'build']
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Ignore variables starting with a capital letter or underscore (e.g., Components, _unused)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      
      // Warn on console logs for cleaner production code, but allow console.warn/error
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      
      // Enforce React refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
])