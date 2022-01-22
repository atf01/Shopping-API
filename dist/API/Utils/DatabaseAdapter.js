"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var DatabaseConnectionObject_1 = __importDefault(require("./DatabaseConnectionObject"));
var DatabaseAdapter = /** @class */ (function () {
    function DatabaseAdapter() {
        this.client = new pg_1.Pool;
        this.client = new pg_1.Pool({
            user: DatabaseConnectionObject_1.default.user,
            password: DatabaseConnectionObject_1.default.password,
            host: DatabaseConnectionObject_1.default.host,
            database: DatabaseConnectionObject_1.default.database,
            port: DatabaseConnectionObject_1.default.port,
        });
    }
    DatabaseAdapter.getInstance = function () {
        if (!DatabaseAdapter.Adapter) {
            DatabaseAdapter.Adapter = new DatabaseAdapter();
        }
        return this.Adapter;
    };
    DatabaseAdapter.prototype.getClient = function () {
        return this.client;
    };
    return DatabaseAdapter;
}());
exports.default = DatabaseAdapter;
