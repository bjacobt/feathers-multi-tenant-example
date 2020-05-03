// Initializes the `tenant` service on path `/tenant`
const { Tenant } = require('./tenant.class');
const createModel = require('../../models/tenant.model');
const hooks = require('./tenant.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tenant', new Tenant(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tenant');

  service.hooks(hooks);
};
