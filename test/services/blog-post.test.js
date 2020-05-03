const assert = require('assert');
const app = require('../../src/app');

describe('\'blog-post\' service', () => {
  it('registered the service', () => {
    const service = app.service('blog-post');

    assert.ok(service, 'Registered the service');
  });
});
