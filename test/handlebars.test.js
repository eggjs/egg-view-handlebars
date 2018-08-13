'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const path = require('path');
const fs = require('fs');


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


  describe('优化本地开发，不缓存partials', () => {
    function writeHbsFile(app, content) {
      const tplPath = path.resolve(app.config.view.root[0], './partials/fresh_head.hbs');
      fs.writeFileSync(tplPath, content, 'utf-8');
    }

    before(() => {
      return app.ready(() => {
        writeHbsFile(app, 'version-1');
      });
    });

    after(() => {
      writeHbsFile(app, 'version-1');
    });

    it('should GET /fresh', () => {
      return request(app.callback())
        .get('/fresh')
        .expect(/version-1\n+body/)
        .expect(200)
        .then(() => {
          // 编辑文件
          writeHbsFile(app, 'version-2');

          return request(app.callback())
            .get('/fresh')
            .expect(/version-2\n+body/)
            .expect(200);
        });
    });
  });

});
