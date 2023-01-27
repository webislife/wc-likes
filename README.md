# wc-likes
Native web component for likes in any pages. Very simple for use\customize and integration with any js framework like vue\react\angular\other, support best web development practises

see demo.html with integration this web-component
```
    //set -fetch state for SSR async likes
    <wc-likes class="-fetch" data-post-id="1" data-logged="1"></wc-likes-post>
    //liked state
    <wc-likes class="-liked" data-post-id="1" data-logged="1"></wc-likes-post>
    //need auth state
    <wc-likes class="-liked" data-post-id="1" data-logged="0"></wc-likes-post>
```
available package commands
`npm run sass' - build scss styles
`npm run tsc' - run typescript
`npm run babel-minify' - minify code after typescript
`npm run build' - build all stpes 1.sass 2.tsc 3.babel-minify

Enojoy!

dev by strokoff.ru - make web not war)
See real integration in webislife.ru - web dev blog for ru developers