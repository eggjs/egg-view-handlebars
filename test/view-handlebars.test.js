'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/view-handlebars.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/view-handlebars-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, handlebars')
      .expect(200);
  });

  it('should GET /renderString', () => {
    return request(app.callback())
        .get('/renderString')
        .expect('renderString')
        .expect(200);
  });

  it('should GET /render', () => {
    return request(app.callback())
        .get('/render')
        .expect('render')
        .expect(200);
  });
});
