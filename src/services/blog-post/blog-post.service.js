// Initializes the `blog-post` service on path `/blog-post`
const { BlogPost } = require('./blog-post.class');
const createModel = require('../../models/blog-post.model');
const hooks = require('./blog-post.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/blog-post', new BlogPost(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('blog-post');

  service.hooks(hooks);
};
