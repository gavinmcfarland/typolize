# Typolize

A style reset for creating perfect modular scale in typography and spacing.

Tpolize creates default font-sizes and margins for all typographical elements based on a set of variables.

```css
:root {
    --root-size: 16px;
    --line-ratio: 1.5;
    --font-ratio: 1.333;
}
```

These are used to create a range from `-2` to `10` of variables which you can use in your design.

- `--font-size-<integer:-2-10>`
- `--spacing-<integer:-2-10>`

Change the default CSS variables to alter the modular scale of the typopraghy and spacing.

See a [preview](https://typolize.limitlessloop.now.sh/) of the styles.


## Install

Download directly from a CDN using unpkg

```
https://unpkg.com/typolize/dist/typolize.css
```

Or use in your node project using the following

```bash
npm install typolize
```

And in your stylesheets using PostCSS import

```css
@import 'typolize'
```

## Customise



## Development

To customise the output or for development purposes.

1. Download or fork the repo and install dependencies
    ```bash
    npm install
    ```
2. Make changes to `src/typolize.css`
3. Build styles
    ```bash
    npm run build
    ```
4. Styles are outputted to `dist/typolize.css`

