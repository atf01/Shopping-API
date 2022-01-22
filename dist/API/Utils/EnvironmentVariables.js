"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, DB_DRIVER = _a.DB_DRIVER, DB_DEV = _a.DB_DEV, DB_USER = _a.DB_USER, DB_TEST = _a.DB_TEST, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_PASSWORD = _a.DB_PASSWORD, PASS_SALT = _a.PASS_SALT, PASS_PEPPER = _a.PASS_PEPPER, JWT_TOKEN_SECRET = _a.JWT_TOKEN_SECRET, ENV = _a.ENV;
var environmentObject = {
    DevelopmentDB: DB_DEV,
    TestingDB: DB_TEST,
    DatabasePort: DB_PORT,
    DatabaseDriver: DB_DRIVER,
    DatabaseUser: DB_USER,
    DatabaseUserPassword: DB_PASSWORD,
    BcryptPepper: PASS_PEPPER,
    BcryptSalt: PASS_SALT,
    JWTSecretToken: JWT_TOKEN_SECRET,
    DatabaseHost: DB_HOST,
    WorkEnvironment: ENV
};
exports.default = environmentObject;
