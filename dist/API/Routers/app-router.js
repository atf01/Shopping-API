"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var UserController_1 = require("../Controllers/UserController");
var ProductController_1 = require("../Controllers/ProductController");
var OrderController_1 = require("../Controllers/OrderController");
var appRouter = function (app) {
    app.use('/users', UserController_1.UserController);
    app.use('/products', ProductController_1.ProductController);
    app.use('/orders', OrderController_1.OrderController);
};
exports.appRouter = appRouter;
