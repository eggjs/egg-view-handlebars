'use strict';

const COMPILE = Symbol('compile');
const fs = require('fs');
const handlebars = require('handlebars');

module.exports = app => {
  class HandlebarsView {
    constructor(ctx) {
      this.app = ctx.app;
    }

    render(name, context) {
      return new Promise((resolve, reject) => {
        fs.readFile(name, 'utf8', (err, tpl) => {
          if (err) return reject(err);
          resolve(this[COMPILE](tpl, context));
        });
      });
    }

    renderString(tpl, context) {
      return new Promise(resolve => {
        resolve(this[COMPILE](tpl, context));
      });
    }

    [COMPILE](tpl, context) {
      return handlebars.compile(tpl, Object.assign(this.app.config.handlebars, this.app.config.view) || {})(context);
    }
  }
  app.view.use('handlebars', HandlebarsView);
};
