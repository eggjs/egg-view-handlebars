'use strict';

module.exports = app => {
  app.get('/cache', function* () {
    yield this.render('cache');
  });

};
