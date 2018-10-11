"use strict";

module.exports = function (app) {
    const Users = require("../controller/user")
    const controller = new Users();

    app.post('/api/user/login', controller.login);
    app.post('/api/user/reg', controller.register);
    // app.get('/api/user/login/:id',controller.login)
};