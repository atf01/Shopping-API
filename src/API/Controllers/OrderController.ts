import {Request,Response, Router} from 'express';
import {Order} from '../Interfaces/Order';
import OrderProduct from '../Interfaces/OrderProduct';
import authToken from '../Middleware/authToken';
import OrderModel from '../Models/OrderModel';
import OrderProductsModel from '../Models/Order_ProductModel';
export const  OrderController:Router = Router();

const  CreateOrder =async (Req:Request,Res:Response) =>
{
    try
    {
        const order:Order = Req.body;
        const data:Order = await new OrderModel().createOrder(order);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}
const  fetchAllActiveOrdersByUserId =async (Req:Request,Res:Response) =>
{
    try
    {
        const user_id:number =parseInt(Req.params.user_id);
        const data:Order[] = await new OrderModel().fetchAllActiveOrdersByUserId(user_id);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const  getCompletedOrdersByUserId =async (Req:Request,Res:Response) =>
{
    try
    {
        const user_id = parseInt(Req.params.user_id);
        const data:Order[] = await new OrderModel().getCompletedOrdersByUserId(user_id);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const getCurrentOrderByUserId = async (Req:Request,Res:Response) =>
{
    try
    {
        const user_id = parseInt(Req.params.user_id);
        const data:Order = await new OrderModel().getCurrentOrderByUserId(user_id);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const getOrders = async (Req:Request,Res:Response) =>
{
    try
    {
        const user_id = parseInt(Req.params.user_id);
        const data:Order[] = await new OrderModel().getOrders(user_id)
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const updateOrderStatus = async (Req:Request,Res:Response) =>
{
    try
    {
        const order_id = parseInt(Req.params.order_id);
        const status:string = Req.body.status;
        const data:Order = await new OrderModel().updateOrderStatus(status,order_id);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const deleteOrder = async (Req:Request,Res:Response) =>
{
    try
    {
        const order_id = parseInt(Req.params.order_id);
        const status:string = Req.body;
        const data:Order = await new OrderModel().deleteOrder(order_id);
        Res.status(200);
        return Res.json('Order Deleted Successfully');
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}
const addOrderToProduct = async (Req:Request,Res:Response) =>
{
    try
    {
        const order_product:OrderProduct = Req.body;
        const data:OrderProduct = await new OrderProductsModel().AddProductToOrder(order_product);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }

}

OrderController.post('/',CreateOrder);
OrderController.post('/products',authToken,addOrderToProduct);
OrderController.delete('/:order_id',deleteOrder);
OrderController.put('/:order_id',updateOrderStatus);
OrderController.get('/user/:user_id',getOrders);
OrderController.get('/user/:user_id/current',getCurrentOrderByUserId);
OrderController.get('/user/:user_id/active',fetchAllActiveOrdersByUserId);
OrderController.get('/user/:user_id/complete',getCompletedOrdersByUserId);


