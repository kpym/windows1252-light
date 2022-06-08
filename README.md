# [windows1252-light](https://github.com/kpym/windows1252-light)

Very small _(1.29 KB)_ javascript library to encode string to `Windows-1252`.

# Usage

This library can be downloaded or linked throught GitHub pages _(not recommended)_ :

```html
  <script src="https://kpym.github.io/windows1252-light/windows1252.js" defer></script>
```

This library contains a single function `UnicodeToWindows1252` that ca be used like this

```js
const encoded = UnicodeToWindows1252('Crème brûlée 🙂'); // default replacement character is '?'
const decoded = new TextDecoder("windows-1252").decode(encoded); // 'Crème brûlée ?'
```

```js
const encoded = UnicodeToWindows1252('Crème brûlée 🙂', '*'); // set replacement character to '*'
const decoded = new TextDecoder("windows-1252").decode(encoded); // 'Crème brûlée *'
```

```js
const encoded = UnicodeToWindows1252('Crème brûlée 🙂', ''); // ignore non encodable characters
const decoded = new TextDecoder("windows-1252").decode(encoded); // 'Crème brûlée '
```

# Example

You can see in [example.html](example.html) how to use this library to build a csv file for Excel under Windows.<br>
_This example is based on [b4stien/js-csv-encoding](https://github.com/b4stien/js-csv-encoding)_.
