const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssPow = require('postcss-pow')
const postcssFor = require('postcss-for')
const postcssLogical = require('postcss-logical')
const fs = require('fs')

fs.readFile('src/typolize.css', (err, css) => {
    
  postcss([postcssFor, postcssPow, postcssLogical, autoprefixer])
    .process(css, { from: 'src/typolize.css', to: 'dist/typolize.css' })
    .then(result => {
      fs.writeFile('dist/typolize.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('dest/typolize.css.map', result.map, () => true)
      }
      fs.writeFile('public/typolize.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('public/typolize.css.map', result.map, () => true)
      }
    })
})