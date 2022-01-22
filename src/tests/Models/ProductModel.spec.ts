import Product from '../../API/Interfaces/Product';
import ProductModel from '../../API/Models/ProductModel';
import DatabaseAdapter from '../../API/Utils/DatabaseAdapter';

describe('Product Model', () => {

    afterAll( async ()=>{
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
    });
    const productModel = new ProductModel();
    const product:Product=
    {
        id:1,
        name: 'aeo4',
        price:400
    }
    it('test creating product', async () => {
        const products = await productModel.createProduct(product);
        expect(products).toEqual(product);
    });

    it('test getting all product', async () => {
        const products = await productModel.Index();
        expect(products).toEqual([product]);
    });
    it('test getting product by id', async () => {
        const products = await productModel.fetchProductById(1);
        expect(products).toEqual(product);
    });

    beforeAll( async ()=>{
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
    });
    
});