const { authenticate } = require('@feathersjs/authentication').hooks;

const addTenantIdToEntities = require('../../hooks/add-tenant-id-to-entities');

const restrictEntriesToATenant = require('../../hooks/restrict-entries-to-a-tenant');

module.exports = {
  before: {
    all: [authenticate('jwt'), restrictEntriesToATenant()],
    find: [],
    get: [],
    create: [addTenantIdToEntities()],
    update: [],
    patch: [],
    remove: []
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
