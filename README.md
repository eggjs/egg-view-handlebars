# egg-view-handlebars

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-handlebars.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-handlebars
[travis-image]: https://img.shields.io/travis/eggjs/egg-view-handlebars.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-view-handlebars
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-view-handlebars.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-view-handlebars?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-view-handlebars.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-view-handlebars
[snyk-image]: https://snyk.io/test/npm/egg-view-handlebars/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-handlebars
[download-image]: https://img.shields.io/npm/dm/egg-view-handlebars.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-handlebars

<!--
Description here.
-->

## Install

```bash
$ npm i egg-view-handlebars --save
```

## Usage

`{app_root}/config/plugin.js`
```js
exports.handlebars = {
  enable: true,
  package: 'egg-view-handlebars',
};
```

`{app_root}/config/config.default.js`
```js
'use strict';
/**
 * app keys
 * @type {string}
 */
exports.keys = 'e6099001cb0a0ec3eb8b0e1a54b27060';
/**
 * view
 * @member
 * @property defaultViewEngine: string setup default view engine
 * @property defaultExtension: string template file extension
 * @property mapping: Object {string: string}
 */
exports.view = {
	defaultViewEngine: 'handlebars',
	defaultExtension: '.hbs',
	mapping: {
		'.hbs': 'handlebars',
	},
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.handlebars = {
	
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
