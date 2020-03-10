# Typolize

A style reset for creating perfect modular scale in typography and spacing.

Typolize creates CSS variables for font-sizes and spacing based on a set of defaults which you can customize.

```css
:root {
    --root-size: 16px;
    --line-ratio: 1.5;
    --font-ratio: 1.333;
}
```

Values range between `-2` to `10` which you can reference to define margins and paddings between elements.

```css
body {
    font-size: var(--font-size-0);
}

h1 {
    font-size: var(--font-size-6);
    margin-bottom: var(--spacing-3);
}

p {
    margin-top: var(--spacing-1);
    margin-bottom: var(--spacing-0);
}
```

Typolize is compatible with `reset.css` and `normalize.css`.

See a [demo](https://typolize.limitlessloop.now.sh/) of styles being applied to different type elements.


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
