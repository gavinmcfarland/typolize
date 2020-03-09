# PostCSS Pow [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Pow] lets you calculate the power of a number dynamically using CSS variables (supports integers only). This is useful for example if your design uses a font scale which changes at different breakpoints using media queries. Or if you need to animate a measurement which uses an exponent calculated using a CSS variables.

```pcss
:root {
	--scale: 1.68;
}

.example {
	font-size: calc(16px * pow(var(--scale), 2));
}

/* becomes */

:root {
	--scale: 1.68;
}

.example {
	font-size: calc(16px * (var(--scale) * var(--scale)));
}

```

## Usage

Add [PostCSS Pow] to your project:

```bash
npm install postcss-pow --save-dev
```

Use **PostCSS Pow** to process your CSS:

```js
const postcssPow = require('postcss-pow');

postcssPow.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssPow = require('postcss-pow');

postcss([
  postcssPow(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

**PostCSS Pow** runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| ----------------------- | ------------------------------------- | ----------------------------- | ----------------------------------------------- | ----------------------- | ------------------------- |

[cli-img]: https://img.shields.io/travis/limitlessloop/postcss-pow/master.svg
[cli-url]: https://travis-ci.org/limitlessloop/postcss-pow
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-pow.svg
[npm-url]: https://www.npmjs.com/package/postcss-pow

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Pow]: https://github.com/limitlessloop/postcss-pow
