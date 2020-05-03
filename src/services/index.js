const users = require('./users/users.service.js');
const tenant = require('./tenant/tenant.service.js');
const blogPost = require('./blog-post/blog-post.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tenant);
  app.configure(blogPost);
};
