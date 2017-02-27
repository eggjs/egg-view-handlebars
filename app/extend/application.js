'use strict';

const VIEW_ENGINE = Symbol('app#ViewEngine');
const View = require('../../lib/view');
const handlebars = require('handlebars');

module.exports = {
  get [Symbol.for('egg#view')]() {
    return View;
  },

  get viewEngine() {
    if (!this[VIEW_ENGINE]) {
      this[VIEW_ENGINE] = handlebars;
    }
    return this[VIEW_ENGINE];
  },
};
