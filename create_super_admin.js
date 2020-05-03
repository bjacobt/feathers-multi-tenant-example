const app = require('./src/app');

const sequelize = app.get('sequelizeClient');
const { users, tenant } = sequelize.models;

const models = {
    tenant: tenant}

const superAdminTenant = {
    name: "superadmin-tenant",
};




//users.associate(models);
try {
    app.service("tenant").create(superAdminTenant).then(resp => {
        const { id } = resp;
        const superAdmin = {
            email: "superadmin@example.com",
            password: "changeme",
            role: 'superadmin',
            tenantId: id
        };
        app.service("users").create(superAdmin).then(adminCreateResp => {
            console.log(adminCreateResp);
        });
   });
   

    
} catch(err) {
    console.log(err);
}


