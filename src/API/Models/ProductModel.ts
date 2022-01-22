import { PoolClient, QueryResult } from 'pg';
import  Product  from '../Interfaces/Product';
import DatabaseAdapter from '../Utils/DatabaseAdapter';

export default class ProductModel 
{

  // select all products
  public async Index(): Promise<Product[]> {
    try 
    {
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const sql: string = `SELECT * FROM products`;
      const result: QueryResult = await conn.query(sql);
      conn.release();
      return result.rows;
    }
    catch (err) 
    {
      throw new Error(`Could not get all products. Error: ${err}`);
    }
  }

  // select product by id
  async fetchProductById(productId: number): Promise<Product> 
  {
    try 
    {
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const sql: string = `SELECT * FROM products WHERE id=$1`;
      const result: QueryResult = await conn.query(sql, [productId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get product by id. Error: ${err}`);
    }
  }

  // create product
  async createProduct(product: Product): Promise<Product> {
    try 
    {
      const { name, price} = product;
      const sql: string = `INSERT INTO products (name,price) VALUES($1,$2) RETURNING *;`;
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const result: QueryResult = await conn.query(sql, [name,price]);
      conn.release();
      return result.rows[0];
    } 
    catch (err) 
    {
      throw new Error(`Could not create product. Error: ${err}`);
    }
  }

  // delete product
  async deleteProduct(id: number): Promise<Product> 
  {
    try 
    {
      const sql: string = `DELETE FROM products WHERE id=$1 RETURNING *`;
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } 
    catch (err) 
    {
      throw new Error(`Could not delete product ${id}. Error: ${err}`);
    }
  }
}