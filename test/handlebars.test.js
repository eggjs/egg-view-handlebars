'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/handlebars.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/handlebars-test',
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

  it('should GET /renderStringError', () => {
    return request(app.callback())
      .get('/renderStringError')
      .expect(/Parse error on line 1/)
      .expect(200);
  });

  it('should GET /render', () => {
    return request(app.callback())
      .get('/render')
      .expect('render')
      .expect(200);
  });

  it('should GET /renderLayoutDefault', () => {
    return request(app.callback())
      .get('/renderLayoutDefault')
      .expect('<!DOCTYPE html>\n<html>\n<head>\n<title>main</title>\n</head>\n<body>\nrender\n</body>\n</html>')
      .expect(200);
  });

  it('should GET /renderLayoutCustom', () => {
    return request(app.callback())
      .get('/renderLayoutCustom')
      .expect('<!DOCTYPE html>\n<html>\n<head>\n<title>layout</title>\n</head>\n<body>\nrender\n</body>\n</html>')
      .expect(200);
  });

  it('should GET /renderError', () => {
    return request(app.callback())
      .get('/renderError')
      .expect(/Parse error on line 1/)
      .expect(200);
  });

  it('should GET /partial', () => {
    return request(app.callback())
      .get('/partial')
      .expect(/<h2>By Yehuda Katz<\/h2>\n<div class="body">/)
      .expect(200);
  });
});
