"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerator = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var EnvironmentVariables_1 = __importDefault(require("./EnvironmentVariables"));
var tokenGenerator = function (id) {
    return jsonwebtoken_1.default.sign(id.toString(), EnvironmentVariables_1.default.JWTSecretToken);
};
exports.tokenGenerator = tokenGenerator;
