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

## 依赖说明

### 依赖的 egg 版本

egg-view-handlebars 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

<!--### 依赖的插件 -->
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

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


## 配置

```js
// {app_root}/config/config.default.js
exports.handlebars = {
	
};
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。


## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 移步交流。

## License

[MIT](LICENSE)
