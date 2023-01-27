import { terser } from 'rollup-plugin-terser'

import pkg from './package.json' assert {type: 'json'}

export default {
	input: 'main.js',
	output: [
		{
			file: pkg.main,
			format: 'cjs'
		},
		{
			file: pkg.module,
			format: 'es'
		},
		{
			file: pkg.browser,
			format: 'umd',
			name: 'DataToData'
		}
	],
	plugins: [terser()]
}