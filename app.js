'use strict';

const COMPILE = Symbol('compile');
const fs = require('mz/fs');
const handlebars = require('handlebars');

module.exports = app => {
  class HandlebarsView {
    constructor(ctx) {
      this.app = ctx.app;
    }

    * render(name, context, options) {
      const content = yield fs.readFile(name, 'utf8');
      return this[COMPILE](content, context, options);
    }

    * renderString(tpl, context, options) {
      return this[COMPILE](tpl, context, options);
    }

    [COMPILE](tpl, context, options) {
      return handlebars.compile(tpl, Object.assign({}, this.app.config.handlebars, options))(context);
    }
  }
  app.view.use('handlebars', HandlebarsView);
};
