'use strict';

module.exports = app => {
  app.view.use('handlebars', require('./lib/view'));
};
