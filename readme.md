# promise-once [![Build Status](http://img.shields.io/travis/vvo/promise-once/master.svg?style=flat-square)](https://travis-ci.org/vvo/promise-once) [![Dependency Status](http://img.shields.io/david/vvo/promise-once.svg?style=flat-square)](https://david-dm.org/vvo/promise-once) [![devDependency Status](http://img.shields.io/david/dev/vvo/promise-once.svg?style=flat-square)](https://david-dm.org/vvo/promise-once#info=devDependencies)

Wrap a promise constructor to return the same promise everytime.

It's [once](https://github.com/isaacs/once) for promises.

```shell
npm install promise-once --save
```

## Usage

```js
var i = 0;
var incrementOnce = require('promise-once')(increment);

incrementOnce()
  .then(incrementOnce)
  .then(incrementOnce)
  .then(incrementOnce)
  .then(incrementOnce)
  .then(incrementOnce)
  .then(console.log)

// `1` is written to the console

function increment() {
  i++;
}
```

Default is to use [promise](https://www.npmjs.org/package/promise) but you can pass your shim along:

```js
var promiseOnce = require('promise-once');
promiseOnce.Promise = require('es6-promise');
```
