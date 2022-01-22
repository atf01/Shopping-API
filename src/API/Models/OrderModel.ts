import { Order } from '../Interfaces/Order';
import DatabaseAdapter from '../Utils/DatabaseAdapter';
import CurrentOrder from '../Interfaces/CurrentOrder';
export  default class OrderModel
{
  // define table

  // select all orders for a user
 public  async getOrders(user_id: number): Promise<Order[]> {
    try {
      const conn = await DatabaseAdapter.getInstance().getClient().connect();
      const sql = `SELECT * FROM orders WHERE user_id=$1`;
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not get all orders of user. Error: ${err}`
      );
    }
  }

  // Get current order by user id
  public async getCurrentOrderByUserId(user_id: number):Promise<CurrentOrder>
  {
    try {
        const conn = await DatabaseAdapter.getInstance().getClient().connect();
        const ordersSql ='SELECT * FROM orders WHERE user_id=$1 ORDER BY id DESC LIMIT 1';
        const order = await conn.query(ordersSql, [user_id]);
        const productsSql ='SELECT * FROM products INNER JOIN order_products ON products.id = order_products.product_id WHERE order_products.order_id =$1';
        const products = await conn.query(productsSql, [order.rows[0].id]);
        const produtcsIdAndQuanty = products.rows.reduce(
        (prev, curr) => {
        prev.push({id: curr.id,quantity: curr.quantity});
        return prev;},[]);
        const result:CurrentOrder = 
        {
            order_id: order.rows[0].id,
            products: produtcsIdAndQuanty,
            user_id: order.rows[0].user_id,
            status: order.rows[0].status,
        };
        conn.release();
        return result;
    }
    catch (err) 
    {
      throw new Error(`Could not get current order. Error: ${err}`);
    }
  }
  // Get active order by user id
 public  async fetchAllActiveOrdersByUserId(user_id: number): Promise<Order[]> {
    try 
    {
      const conn = await DatabaseAdapter.getInstance().getClient().connect();
      const sql = `SELECT * FROM orders WHERE user_id = $1 AND status = $2`;
      const result = await conn.query(sql, [user_id,'active']);
      conn.release();
      return result.rows;
    }
    catch (err) 
    {
      throw new Error(`Could not get active order. Error: ${err}`);
    }
  }

  // select completed order by user id
 public  async getCompletedOrdersByUserId(user_id: number): Promise<Order[]> {
    try 
    {
      const conn = await DatabaseAdapter.getInstance().getClient().connect();
      const sql = `SELECT * FROM orders WHERE user_id = $1 AND status = $2`;
      const result = await conn.query(sql, [user_id,'complete']);
      conn.release();
      return result.rows;
    } 
    catch (err) {
      throw new Error(
        `Could not get completed orders. Error: ${err}`
      );
    }
  }

  // create an order
  public async createOrder(order: Order): Promise<Order> {
    try 
    {
      const conn = await DatabaseAdapter.getInstance().getClient().connect();
      const sql = `INSERT INTO orders  (user_id, status) VALUES($1, $2) RETURNING *`;
      const result = await conn.query(sql, [order.user_id,order.status]);
      conn.release();

      return result.rows[0];
    } 
    catch (err) 
    {
      throw new Error(`Could not create order. Error: ${err}`);
    }
  }

  // update an order
  public async updateOrderStatus(status: string,order_id: number): Promise<Order> {
    try 
    {
      const conn = await DatabaseAdapter.getInstance().getClient().connect();
      const sql = `UPDATE orders SET status=$1 WHERE id=$2 RETURNING *`;
      const result = await conn.query(sql, [status, order_id]);
      conn.release();
      return result.rows[0];
    } 
    catch (err) 
    {
      throw new Error(`Could not update order status. Error: ${err}`);
    }
  }

  async deleteOrder(id: number): Promise<Order> {
    try {
      const sql = `DELETE FROM orders WHERE id=$1 RETURNING *`;
      const conn = await DatabaseAdapter.getInstance().getClient().connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } 
    catch(err) 
    {
      throw new Error(`Could not delete order ${id}. Error: ${err}`);
    }
  }
}

