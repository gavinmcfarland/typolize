const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssPow = require('postcss-pow')
const postcssFor = require('postcss-for')
const postcssLogical = require('postcss-logical')
const postcssMath = require('postcss-math')
const postcssNested = require('postcss-nested')
const fs = require('fs')

fs.readFile('src/typolize.css', (err, css) => {

	postcss([postcssImport, postcssFor, postcssNested, postcssMath, postcssPow, postcssLogical, autoprefixer])
		.process(css, { from: 'src/typolize.css', to: 'dist/typolize/index.css' })
		.then(result => {
			fs.writeFile('dist/typolize/index.css', result.css, () => true)
			if (result.map) {
				fs.writeFile('dest/typolize/index.css.map', result.map, () => true)
			}
			fs.writeFile('public/typolize/index.css', result.css, () => true)
			if (result.map) {
				fs.writeFile('public/typolize/index.css.map', result.map, () => true)
			}
		})
})

fs.readFile('src/theme/default/index.css', (err, css) => {

	postcss([postcssImport, postcssFor, postcssNested, postcssMath, postcssPow, postcssLogical, autoprefixer])
		.process(css, { from: 'src/theme/default/index.css', to: 'dist/theme/default.css' })
		.then(result => {
			fs.writeFile('dist/theme/default.css', result.css, () => true)
			if (result.map) {
				fs.writeFile('dest/theme/default.css.map', result.map, () => true)
			}
			fs.writeFile('public/theme/default.css', result.css, () => true)
			if (result.map) {
				fs.writeFile('public/theme/default.css.map', result.map, () => true)
			}
		})
})
