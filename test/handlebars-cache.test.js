'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const fs = require('fs');
const path = require('path');

describe('test/handlebars-cache.test.js', () => {
  let app;

  function writeHbsFile(app, content) {
    const tplPath = path.resolve(app.config.view.root[0], './cache.hbs');
    fs.writeFileSync(tplPath, content, 'utf-8');
  }

  before(() => {
    app = mm.app({
      baseDir: 'apps/handlebars-cache',
    });
    return app.ready().then(() => {
      writeHbsFile(app, 'version-1');
    });
  });

  after(() => {
    writeHbsFile(app, 'version-1');
    app.close();
  });
  afterEach(mm.restore);

  it('cache compiled', () => {
    return request(app.callback())
      .get('/cache')
      .expect(/version-1/)
      .expect(200)
      .then(() => {
        // 修改模板
        writeHbsFile(app, 'version-2');

        return request(app.callback())
          .get('/cache')
          .expect(/version-1/)
          .expect(200);
      });
  });
});
