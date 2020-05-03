const assert = require('assert');
const app = require('../../src/app');

describe('\'tenant\' service', () => {
  it('registered the service', () => {
    const service = app.service('tenant');

    assert.ok(service, 'Registered the service');
  });
});
