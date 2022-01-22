"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = __importDefault(require("../../API/Models/UserModel"));
var ProductModel_1 = __importDefault(require("../../API/Models/ProductModel"));
var OrderModel_1 = __importDefault(require("../../API/Models/OrderModel"));
var DatabaseAdapter_1 = __importDefault(require("../../API/Utils/DatabaseAdapter"));
describe('Order Model', function () {
    var productModel = new ProductModel_1.default();
    var orderModel = new OrderModel_1.default();
    var userModel = new UserModel_1.default();
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, sql_users, sql_products, sql_orders, sql_order_products, err_1, user, proudct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, DatabaseAdapter_1.default.getInstance().getClient().connect()];
                case 1:
                    conn = _a.sent();
                    sql_users = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
                    sql_products = 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
                    sql_orders = 'TRUNCATE TABLE orders RESTART IDENTITY CASCADE';
                    sql_order_products = 'TRUNCATE TABLE order_products RESTART IDENTITY CASCADE';
                    return [4 /*yield*/, conn.query(sql_users)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sql_products)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sql_orders)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sql_order_products)];
                case 5:
                    _a.sent();
                    conn.release();
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    throw new Error("err: ".concat(err_1));
                case 7:
                    user = {
                        firstname: 'Ahmed',
                        lastname: 'Ali',
                        password: 'shut-up'
                    };
                    proudct = {
                        id: 1,
                        name: 'chocolate',
                        price: 350
                    };
                    return [4 /*yield*/, userModel.createUser(user)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, productModel.createProduct(proudct)];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, sql_users, sql_products, sql_orders, sql_order_products, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, DatabaseAdapter_1.default.getInstance().getClient().connect()];
                case 1:
                    conn = _a.sent();
                    sql_users = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
                    sql_products = 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
                    sql_orders = 'TRUNCATE TABLE orders RESTART IDENTITY CASCADE';
                    sql_order_products = 'TRUNCATE TABLE order_products RESTART IDENTITY CASCADE';
                    return [4 /*yield*/, conn.query(sql_users)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sql_products)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sql_orders)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sql_order_products)];
                case 5:
                    _a.sent();
                    conn.release();
                    return [3 /*break*/, 7];
                case 6:
                    err_2 = _a.sent();
                    throw new Error("err: ".concat(err_2));
                case 7: return [2 /*return*/];
            }
        });
    }); });
    it('test creating order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order, createdOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = {
                        id: 1,
                        user_id: 1,
                        status: 'active',
                    };
                    return [4 /*yield*/, orderModel.createOrder(order)];
                case 1:
                    createdOrder = _a.sent();
                    expect(createdOrder).toEqual(order);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test show Current order By User_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order, currentOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.getCurrentOrderByUserId(1)];
                case 1:
                    order = _a.sent();
                    currentOrder = {
                        user_id: 1,
                        order_id: 1,
                        products: [],
                        status: 'active'
                    };
                    expect(order).toEqual(currentOrder);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test show all active orders by user_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var orders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.fetchAllActiveOrdersByUserId(1)];
                case 1:
                    orders = _a.sent();
                    expect(orders.length).toEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test show completed orders by user_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var orders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.getCompletedOrdersByUserId(1)];
                case 1:
                    orders = _a.sent();
                    expect(orders.length).toEqual(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test update an order by user_id to complete', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.updateOrderStatus('complete', 1)];
                case 1:
                    order = _a.sent();
                    expect(order.status).toEqual('complete');
                    return [2 /*return*/];
            }
        });
    }); });
});
