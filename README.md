# Typolize

Typolize provides sensible default styling for good typography on the web. It consists of a reset and customizable variables that let you create harmonious type sizing and spacing.

Customising the following variables will give a completely different feel to the proportion and scale of your site or application.

```css
:root {
    --font-base: 16px;
    --font-ratio: 1.333;
    --line-ratio: 1.5;
    --spacing-ratio: 1;
}
```

## Typesetting

Generating a scale is useful to create typography which shares a common derivative. Sometimes this can lack contrast so by picking out certain steps in the scale it allows you to create a more distinctive look.

Below is an example of customizing the typesetting in Typolize.

```css
:root {
    --font-size-body: var(--font-size-0);
    --font-size-h1: var(--font-size-7);
    --font-size-h2: var(--font-size-5);
    --font-size-h3: var(--font-size-3);
    --font-size-h4: var(--font-size-2);
    --font-size-h5: var(--font-size-1);
    --font-size-h6: var(--font-size-0);
    --font-size-small: var(--font-size--1);
}
```

## Spacing

Control spacing between type by applying margins using either the `--em` or `--rem` variable with a range between `-2` and `10`.

For example:

```css
*+* {
	margin-top: var(--em-1);
}

h1, h2, h3, h4, h5, h5, h6 {
    margin-top: var(--em-3);
    margin-bottom: var(--em-2);
}

section {
    margin-top: var(--rem-4);
    margin-bottom: var(--rem-6);
}
```

## Leading Trim

Apply leading trim to any element using `--leading-trim: ''`, `--leading-trim-over: ''` or `--leading-trim-under: ''`.

By class

```css
.button {
    --leading-trim: '';
}
```

Or selectors

```css
h1, h2, h3, h4, h5, h6, p, li {
    --leading-trim: '';
}
```

Adjust to different fonts by setting the `--cap-height` which is a percentage of the font-size.

```css
:root {
    --cap-height: 0.75;
}
```

See the [demo](https://typolize.now.sh/) for examples of it being used. Take a look at the [default theme](./src/themes/default) for an example of the settings.


## Install

1. Download directly from a CDN using unpkg

    ```
    https://unpkg.com/typolize/dist/typolize.css
    ```
    
    Or use in your node project using the following

    ```bash
    npm install typolize
    ```
    
    Import into your stylesheet

    ```css
    @import 'typolize'
    ```
2. Customize using the variables explained above

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
