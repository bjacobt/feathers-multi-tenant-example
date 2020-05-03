# feathers-multi-tenant-example

> feathers js multi tenant example

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications. 

## Multi tenancy

You can create multi tenancy by
1. Adding a tenant service
2. Associating each user to a tenant (src/models/users.model.js)
3. When ever you create a new service/model, for example a blog post, make sure to associate it with a tenant (src/models/blog-post.model.js)
4. Create a hook that takes the tenantId from user and add it to the model (src/hooks/add-tenant-id-to-entities.js)
5. Create another hook that always appends tenantId to the query parameter (src/hooks/restrict-entries-to-a-tenant.js)

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-multi-tenant-example
    npm install
    ```

3. Start your app, so sqlite database is created

    ```
    npm start
    ```
4. Kill npm process
5. Create superadmin
   ```
   node create_super_admin.js
   ```
5. Start your app

    ```
    npm start
    ```
## Testing

Run the attached postman collection in order to see multi tenancy in action
<!-- Simply run `npm test` and all your tests in the `test/` directory will be run. -->

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
