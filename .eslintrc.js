module.exports = {
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	extends: ['eslint:recommended'],
	env: {
		browser: true,
		node: true
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'double'],
		semi: ['error', 'always'],
		'no-inner-declarations': 'off',
		'no-duplicate-imports': 'error',
		camelcase: 'error',
		eqeqeq: 'error',
		curly: 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-before-blocks': 'error',
		'one-var': ['error', 'never'],
		'no-empty': 'error',
		'keyword-spacing': 'error',
		'space-in-parens': ['error', 'always'],
		'max-depth': ['error', 3],
		complexity: ['error', 5]
	}
};
