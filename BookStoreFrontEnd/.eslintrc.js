module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended'
  ],
  /* parserOptions: {
    ecmaVersion: 2020
  }, */
  'parser': 'babel-eslint',
	extends: ['eslint:recommended'],
	'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'modules': true,
            legacyDecorators: true
        }
    },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-dupe-keys':'off',
    quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-mixed-spaces-and-tabs': 'error',
		'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none'}]
  },
  ignorePatterns: ['./node_modules/', './nuxt/*', './test/*', './.git/*'],
}
