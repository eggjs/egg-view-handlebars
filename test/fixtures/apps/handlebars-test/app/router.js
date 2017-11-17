'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.handlebars.name;
  });

  app.get('/renderString', function* () {
    this.body = yield this.renderString('{{title}}', { title: 'renderString' });
  });

  app.get('/renderStringError', function* () {
    try {
      yield this.renderString('{{title}', { title: 'renderString' });
    } catch (err) {
      this.body = err.message;
    }
  });

  app.get('/render', function* () {
    yield this.render('home', { title: 'render' });
  });

  app.get('/renderError', function* () {
    try {
      yield this.render('error', { title: 'render' });
    } catch (err) {
      this.body = err.message;
    }
  });

  app.get('/partial', function* () {
    yield this.render('partial', {
      author: { firstName: 'Alan', lastName: 'Johnson' },
      body: 'I Love Handlebars',
      comments: [{
        author: { firstName: 'Yehuda', lastName: 'Katz' },
        body: 'Me too!',
      }],
    });
  });

};
