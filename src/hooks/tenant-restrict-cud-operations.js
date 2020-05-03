const { Forbidden } = require('@feathersjs/errors');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { params } = context;
    const { user } = params;

    if(user && user.role !== 'superadmin') {
      throw new Forbidden();
    }
    return context;
  };
};
