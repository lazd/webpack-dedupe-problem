# webpack-dedupe-problem
> Sample repo to reproduce a bug in webpack's optimize-dedupe

## Problem

The dedupe plugin should be overriding the require mechanism so its numerical aliases are resolve. It's not, so whenever a duplicated module is required, an error is thrown.

## Usage

```shell
npm install
webpack
open index.html
```

You should get a page that logs some values to the console. Instead, you get a JS error.
