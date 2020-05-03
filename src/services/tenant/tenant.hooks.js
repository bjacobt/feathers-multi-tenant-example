const { authenticate } = require('@feathersjs/authentication').hooks;

const tenantRestrictCudOperations = require('../../hooks/tenant-restrict-cud-operations');

const tenantGenerateUuid = require('../../hooks/tenant-generate-uuid');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [tenantRestrictCudOperations(), tenantGenerateUuid()],
    update: [tenantRestrictCudOperations()],
    patch: [tenantRestrictCudOperations()],
    remove: [tenantRestrictCudOperations()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
