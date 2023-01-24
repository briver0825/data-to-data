import { terser } from 'rollup-plugin-terser'

export default {
	input: 'main.js',
	output: {
		file: 'bundle.es.js',
		format: 'es',
    plugins: [terser()]
	}
}