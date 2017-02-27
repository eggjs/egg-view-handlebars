'use strict';
const fs = require('fs');
function compile(tpl, context) {
  return this.app.viewEngine.compile(tpl, this.app.config.view || {})(context);
}
class Handlebars {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  render(name, context) {
    return new Promise((resolve, reject) => {
      fs.readFile(name, 'utf8', (err, tpl) => {
        if (err) return reject(err);
        resolve(compile.call(this, tpl, context));
      });
    });
  }

  renderString(tpl, context) {
    return new Promise(resolve => {
      resolve(compile.call(this, tpl, context));
    });
  }
}

module.exports = Handlebars;
