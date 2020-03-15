# Typolize

Normalizes type sizing and spacing using sensible defaults which are highly configurable.


## Base

You can customise the base values to determine the overal aesthetics. Type and spacing are calculated from these base values to provide harmonious configurations.

```css
:root {
    --font-base: 16px;
    --font-ratio: 1.333;
    --line-ratio: 1.5;
    --spacing-ratio: 1;
    --text-crop: var(--true);
    --font-height: 0.75;
}
```

Changing the default `font-ratio` for example will create either a larger or smaller scale of sizes in fonts.


## Typesetting

Customise the scales and contrast between different type elements by changing the default size.

```css
:root {
    --font-size-body: var(--font-size-0);
    --font-size-h1: var(--font-size-7);
    --font-size-h2: var(--font-size-5);
    --font-size-h3: var(--font-size-3);
    --font-size-h4: var(--font-size-2);
    --font-size-h5: var(--font-size-1);
    --font-size-h6: var(--font-size-0);
    --font-size-p: var(--font-size-body);
    --font-size-ul: var(--font-size-body);
    --font-size-ol: var(--font-size-ul);
    --font-size-blockquote: var(--font-size-body);
}
```
Alternatively style elements uniquly using a font size variable `var(--font-size-<-2..10>)` ranging anywhere between `-2` and `10`. 

## Spacing

To manage spacing choose from either em or rem spacing variables `var(--em-<-2..10>)` and `var(--rem-<-2..10>)` ranging anywhere between `-2` and `10`. Ems are useful for type spacing so they are relative to their size, and rems are useful components where for fixed spacing is needed.

By deafult all type elements have a top and bottom margin of `var(--em-1)`. Containers like `divs` and `sections` do not not have margins.

Customise spacing of type elements like the following.

```css
code {
    margin-top: var(--em-1);
    margin-bottom: var(--em-2);
}

/* Or */

* + code {
    margin-top: var(--em-1);
}

code + * {
    margin-bottom: var(--em-2);
}
```

See the [demo](https://typolize.now.sh/) for examples of it being used.


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
