"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnvironmentVariables_1 = __importDefault(require("./EnvironmentVariables"));
var connectionObject = {
    user: EnvironmentVariables_1.default.DatabaseUser,
    password: EnvironmentVariables_1.default.DatabaseUserPassword,
    host: EnvironmentVariables_1.default.DatabaseHost,
    database: EnvironmentVariables_1.default.WorkEnvironment === 'dev' ? EnvironmentVariables_1.default.DevelopmentDB
        : EnvironmentVariables_1.default.TestingDB,
    port: parseInt(EnvironmentVariables_1.default.DatabasePort)
};
exports.default = connectionObject;
