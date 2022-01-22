import User from "../../API/Interfaces/User";
import UserModel from "../../API/Models/UserModel";
import Token from "../../API/Interfaces/Token";
import Product from '../../API/Interfaces/Product';
import ProductModel from '../../API/Models/ProductModel';
import OrderModel from "../../API/Models/OrderModel";
import { Order } from "../../API/Interfaces/Order";
import CurrentOrder from "../../API/Interfaces/CurrentOrder";
import DatabaseAdapter from "../../API/Utils/DatabaseAdapter";

describe('Order Model', () => {
const productModel = new ProductModel();
const orderModel = new OrderModel();
const userModel = new UserModel();

beforeAll(async ()=>
{

    try 
    {
         const conn = await DatabaseAdapter.getInstance().getClient().connect();
         const sql_users = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
         const sql_products= 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
         const sql_orders = 'TRUNCATE TABLE orders RESTART IDENTITY CASCADE';
         const sql_order_products = 'TRUNCATE TABLE order_products RESTART IDENTITY CASCADE';
         await conn.query(sql_users);
         await conn.query(sql_products);
         await conn.query(sql_orders);
         await conn.query(sql_order_products);
         conn.release();
    }
    catch (err) 
    {
         throw new Error(`err: ${err}`);
    }
    
    const user:User =
    {
        firstname:'Ahmed',
        lastname:'Ali',
        password:'shut-up'
    }
    const proudct:Product =
    {
        id:1,
        name:'chocolate',
        price:350
    }
    await userModel.createUser(user);
    await productModel.createProduct(proudct);
});

afterAll( async ()=>{
    try 
    {
         const conn = await DatabaseAdapter.getInstance().getClient().connect();
         const sql_users = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
         const sql_products= 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
         const sql_orders = 'TRUNCATE TABLE orders RESTART IDENTITY CASCADE';
         const sql_order_products = 'TRUNCATE TABLE order_products RESTART IDENTITY CASCADE';
         await conn.query(sql_users);
         await conn.query(sql_products);
         await conn.query(sql_orders);
         await conn.query(sql_order_products);
         conn.release();
    }
    catch (err) 
    {
         throw new Error(`err: ${err}`);
    }
});
it('test creating order', async () => {

    const order:Order=
    {
        id:1,
        user_id: 1,
        status: 'active',
    }
    const createdOrder = await orderModel.createOrder(order);
    expect(createdOrder).toEqual(order);
});

it('test show Current order By User_id', async () => {
    const order = await orderModel.getCurrentOrderByUserId(1);
    const currentOrder:CurrentOrder=
    {
        user_id:1,
        order_id:1,
        products:[],
        status:'active'
    }
    expect(order).toEqual(currentOrder);
});

it('test show all active orders by user_id', async ()=>{
 const orders = await orderModel.fetchAllActiveOrdersByUserId(1);
 expect(orders.length).toEqual(1);
});

it('test show completed orders by user_id', async ()=>{
    const orders = await orderModel.getCompletedOrdersByUserId(1);
    expect(orders.length).toEqual(0);
});

it('test update an order by user_id to complete', async ()=>
{
    const order = await orderModel.updateOrderStatus('complete',1);
    expect(order.status).toEqual('complete');
});




});
