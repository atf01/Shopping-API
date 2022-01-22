"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var app_1 = require("./app");
exports.server = app_1.app.listen(5000, function () {
    console.log("starting app on server");
});
