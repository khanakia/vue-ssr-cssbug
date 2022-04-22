## ISSUE
Server side render does not adds the csss

Expected
```
<h1 class="banner">Hello Jane Doe</h1>
<style> .banner { color: red; } </style>
```

Actual Output
```
<h1 class="banner">Hello Jane Doe</h1>
```


## How to test
yarn

yarn build

node index.mjs


