'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.handlebars.name;
  });

  app.get('/renderString',function* () {
    this.body = yield this.renderString('{{title}}',{title:'renderString'});
  });

  app.get('/render',function* () {
    yield this.render('home',{title:'render'});
  });
};
