import DatabaseAdapter from '../Utils/DatabaseAdapter';
import OrderProduct from '../Interfaces/OrderProduct';


export default class OrderProductsModel 
{
    async AddProductToOrder(newProductOrder: OrderProduct): Promise<OrderProduct>
    {
        try 
        {
            const conn = await DatabaseAdapter.getInstance().getClient().connect();
            const sql ='INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
            const result = await conn.query(sql,[newProductOrder.order_id,newProductOrder.product_id,newProductOrder.quantity]);
            conn.release();
            return result.rows[0];
        }
        catch (err) 
        {
            throw new Error(`cant add product to the order: ${err}`);
        }
    }
}
