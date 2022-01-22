import UserModel from './API/Models/UserModel'
import ProductModel from './API/Models/ProductModel';
import OrderModel from './API/Models/OrderModel';
import User from './API/Interfaces/User';
import Product from './API/Interfaces/Product';
import { Order } from './API/Interfaces/Order';
import environmentObject from './API/Utils/EnvironmentVariables';

const test = async function()
{
    const a = new UserModel();
    const b = new ProductModel();
    const c = new OrderModel();
    const r_1 = await a.fetchUserById(1);
    const r_2 = await b.fetchProductById(1);
    const r_3 = await c.getCompletedOrdersByUserId(1);
    console.log(r_1);
    console.log(r_2);
    console.log(r_3);
}

test();