'use strict';

const path = require('path');
const fs = require('mz/fs');
const handlebars = require('handlebars');

const COMPILE = Symbol('compile');

module.exports = app => {
  const partials = loadPartial(app);
  for (const key of Object.keys(partials)) {
    handlebars.registerPartial(key, partials[key]);
  }
  
  const helpers = loadHelper(app);
  for (const key of Object.keys(helpers)) {
    handlebars.registerHelper(key, eval("(" + helpers[key] + ")"));
  }

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

function loadPartial(app) {
  const partialsPath = app.config.handlebars.partialsPath;
  return loadFiles(partialsPath);
}

function loadHelper(app) {
  const helpersPath = app.config.handlebars.helpersPath;
  return loadFiles(helpersPath);
}

function loadFiles(filesPath){
	// istanbul ignore next
	if (!fs.existsSync(filesPath)) return;
	
	const result = {};
	const files = fs.readdirSync(filesPath);
	for (let name of files) {
		const file = path.join(filesPath, name);
		const stat = fs.statSync(file);
		if (!stat.isFile()) continue;

		name = name
		.replace(/\.\w+$/, '')
		.replace(/[_-][a-z]/ig, s => s.substring(1).toUpperCase());
		result[name] = fs.readFileSync(file).toString();
	}
	
	return result;
}
