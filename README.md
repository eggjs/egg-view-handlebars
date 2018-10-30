# egg-view-handlebars-x

> [suport cache template and recompile partials](https://github.com/eggjs/egg-view-handlebars-x/pull/10)

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-handlebars-x.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-handlebars-x
[travis-image]: https://travis-ci.org/daifee/egg-view-handlebars.svg?branch=master
[travis-url]: https://travis-ci.org/daifee/egg-view-handlebars
[download-image]: https://img.shields.io/npm/dm/egg-view-handlebars-x.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-handlebars-x

egg view plugin for handlebars

## Install

```bash
$ npm i egg-view-handlebars-x --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.handlebars = {
  enable: true,
  package: 'egg-view-handlebars-x',
  // support cache.
  // attention: the `options` param also will be cached
  cache: true,
};
```

```js
// {app_root}/config/config.default.js
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

### Register Partial

Partials are loaded from `app/view/partials` by default, you can define `user_message.hbs` and use `userMessage` as partial.

Note:

- The file name will be camelized, e.x. `foo_bar > fooBar`, `foo-bar > fooBar`
- Don't support cascade directory

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
