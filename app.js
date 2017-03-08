'use strict';

const COMPILE = Symbol('compile');
const fs = require('fs');
const handlebars = require('handlebars');

module.exports = app => {
  class HandlebarsView {
    constructor(ctx) {
      this.app = ctx.app;
    }

    render(name, context, options) {
      return new Promise((resolve, reject) => {
        fs.readFile(name, 'utf8', (err, tpl) => {
          if (err) return reject(err);
          resolve(this[COMPILE](tpl, context, options));
        });
      });
    }

    renderString(tpl, context, options) {
      return Promise.resolve(this[COMPILE](tpl, context, options));
    }

    [COMPILE](tpl, context, options) {
      return handlebars.compile(tpl, Object.assign(this.app.config.handlebars, options) || {})(context);
    }
  }
  app.view.use('handlebars', HandlebarsView);
};
