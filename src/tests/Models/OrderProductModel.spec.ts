import OrderProductsModel from '../../API/Models/Order_ProductModel';
import OrderModel from '../../API/Models/OrderModel';
import UserModel from '../../API/Models/UserModel';
import ProductModel from '../../API/Models/ProductModel';
import Product from '../../API/Interfaces/Product';
import User from '../../API/Interfaces/User';
import { Order } from '../../API/Interfaces/Order';
import DatabaseAdapter from '../../API/Utils/DatabaseAdapter';

const orderModel = new OrderModel();
const orderProductsModel = new OrderProductsModel();
const userModel = new UserModel();
const productModel = new ProductModel();

describe('orderProducts Model', () => 
{
    beforeAll(async ()=>{

        try 
        {
             const conn = await DatabaseAdapter.getInstance().getClient().connect();
             const sql_users = 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
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
        const order:Order=
        {
            id:1,
            user_id: 1,
            status: 'active',
        }
        await userModel.createUser(user);
        await productModel.createProduct(proudct);
        await orderModel.createOrder(order);
    })
    afterAll(async ()=>{
        try 
        {
             const conn = await DatabaseAdapter.getInstance().getClient().connect();
             const sql_users = 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
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
    })

    it('test add product to order', async () => {
        const orderProduct = await orderProductsModel.AddProductToOrder({
            order_id: 1,
            product_id: 1,
            quantity: 5,
        });
        expect(orderProduct).toEqual({
            id: 1,
            order_id: 1,
            product_id: 1,
            quantity: 5,
        });
    });
});