"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var logging_1 = require("./API/Middleware/logging");
var app_router_1 = require("./API/Routers/app-router");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({ optionsSuccessStatus: 200 }));
exports.app.use(express_1.default.json());
exports.app.use(logging_1.logger);
(0, app_router_1.appRouter)(exports.app);
