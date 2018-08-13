'use strict';

const path = require('path');
const fs = require('mz/fs');
const handlebars = require('handlebars');

const COMPILE = Symbol('compile');
const cacheStore = new Map();


module.exports = app => {
  registerPartial(app);

  class HandlebarsView {
    constructor(ctx) {
      this.app = ctx.app;
    }

    async render(name, context, options) {
      const config = this.app.config;
      const cache = config.handlebars && config.handlebars.cache;
      let compiled = cacheStore.get(name);

      // recompile partials
      if (!cache) {
        registerPartial(this.app);
      }

      if (!compiled) {
        const content = await fs.readFile(name, 'utf8');
        compiled = this[COMPILE](content, options);

        if (cache) {
          cacheStore.set(name, compiled);
        }
      }
      return compiled(context);
    }

    async renderString(content, context, options) {
      const compiled = this[COMPILE](content, options);
      return compiled(context);
    }

    [COMPILE](content, options) {
      options = Object.assign({}, this.app.config.handlebars, options);
      return handlebars.compile(content, options);
    }
  }
  app.view.use('handlebars', HandlebarsView);
};

function registerPartial(app) {
  const partials = loadPartial(app);
  if (partials) {
    for (const key of Object.keys(partials)) {
      handlebars.registerPartial(key, partials[key]);
    }
  }
}


function loadPartial(app) {
  const partialsPath = app.config.handlebars.partialsPath;
  // istanbul ignore next
  if (!fs.existsSync(partialsPath)) return;

  const partials = {};
  const files = fs.readdirSync(partialsPath);
  for (let name of files) {
    const file = path.join(partialsPath, name);
    const stat = fs.statSync(file);
    if (!stat.isFile()) continue;

    name = name
      .replace(/\.\w+$/, '')
      .replace(/[_-][a-z]/ig, s => s.substring(1).toUpperCase());
    partials[name] = fs.readFileSync(file).toString();
  }
  return partials;
}
