// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, params } = context;
    const { user } = params;

    data.tenantId = user.tenantId;
    data.creatorId = user.id;
    
    return context;
  };
};
