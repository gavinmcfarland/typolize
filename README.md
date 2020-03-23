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
}
```

Changing the default `font-ratio` for example will create either a larger or smaller scale of sizes in fonts.


## Font Sizing

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
    --font-size-small: var(--font-size--1);
}
```
Alternatively style elements uniquly using a font size variable `var(--font-size-<-2..10>)` ranging anywhere between `-2` and `10`. 

## Spacing

To manage spacing choose from either em or rem spacing variables `var(--em-<-2..10>)` and `var(--rem-<-2..10>)` ranging anywhere between `-2` and `10`. Ems are useful for type spacing so they are relative to their size, and rems are useful components where for fixed spacing is needed.

By deafult all type elements have a top and bottom margin of `var(--em-1)`. Containers like `divs` and `sections` do not not have margins.

Customise spacing of elements

```css
h1 {
    margin-top: var(--em-4);
    margin-bottom: var(--em-2);
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

Adjust to different fonts by setting `--cap-height`.

```css
:root {
    --cap-height: 0.75;
}
```

See the [demo](https://typolize.now.sh/) for examples of it being used.


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
