const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const usersRestrictCudOperations = require('../../hooks/users-restrict-cud-operations');

const usersGenerateUuid = require('../../hooks/users-generate-uuid');


module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), ],
    get: [ authenticate('jwt') ],
    create: [
      authenticate('jwt'),
      hashPassword('password'),
      usersRestrictCudOperations(),
      usersGenerateUuid()
    ],
    update: [
      hashPassword('password'),
      authenticate('jwt'),
      usersRestrictCudOperations()
    ],
    patch: [
      hashPassword('password'),
      authenticate('jwt'),
      usersRestrictCudOperations()
    ],
    remove: [authenticate('jwt'), usersRestrictCudOperations()]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
