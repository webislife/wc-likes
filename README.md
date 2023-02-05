# wc-likes
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/wc-likes)

Native web-component for likes in any pages. Very simple for use\customize and integration with any js framework like vue\react\angular\other, support best web development practises.
See also - [vue-wc-likes](https://github.com/webislife/vue-wc-likes) based on this web-component

## Install

```
npm i wc-likes
```

## Demo pages
see dist/index.html with integration this web-component

see demo in [English demo](https://webislife.ru/demo/wc-likes/)
see demo in [Russian demo](https://webislife.ru/demo/wc-likes/index-ru.html)

## Commands

available package commands
```
`npm run sass' - build scss styles
`npm run tsc' - run typescript
`npm run babel-minify' - minify code after typescript
`npm run build' - build all stpes 1.sass 2.tsc 3.babel-minify
```

## Custom element demo
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<!-- alreday liked -->
<wc-likes class="-liked" value="155" data-hint="Already liked"></wc-likes>
<!-- fetch state -->
<wc-likes class="-fetch" value="1250"></wc-likes>
<!-- disabled -->
<wc-likes class="-disabled" value="11"></wc-likes>
<!-- try it -->
<wc-likes value="0"></wc-likes>

```
Enojoy!

dev by strokoff.ru - make web not war)
See real integration in webislife.ru - web dev blog for ru developers
