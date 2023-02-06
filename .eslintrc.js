module.exports = {
  extends: ['soybeanjs-vue', 'soybeanjs-svelte', 'plugin:astro/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'prettier/prettier': ['error', { parser: 'astro', plugins: [require.resolve('prettier-plugin-astro')] }]
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser'
    }
  ]
};
