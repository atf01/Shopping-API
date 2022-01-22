import supertest, { SuperTest, Test, Response } from 'supertest';
import { Order } from '../../API/Interfaces/Order';
import OrderProduct from '../../API/Interfaces/OrderProduct';
import Product from '../../API/Interfaces/Product';
import User from '../../API/Interfaces/User';
import DatabaseAdapter from '../../API/Utils/DatabaseAdapter';
import {app} from '../../app';

const request: SuperTest<Test> = supertest(app);

describe('testing all app endpoints', ()=>
{
    //where we'll store the token
    let token: string;
    describe('users endpoints test', () => 
    {
    
    afterAll(async ():Promise<void> => 
    {
        const conn = await DatabaseAdapter.getInstance().getClient().connect();
        const sql ='TRUNCATE TABLE  users,products,orders,order_products RESTART IDENTITY CASCADE';
        await conn.query(sql);
        conn.release();
    });

        it('test create first to get token', async (): Promise<void> => {
            const user:User=
            {
                firstname:'Ahmed',
                lastname: 'Fekry',
                password: 'secret-top-secret'
            }
            const response: Response = await request
                .post('/users')
                .send(user);
            expect(response.status).toBe(200);
            token = response.body.token;
        });

        it('test get user by id with correct token', async (): Promise<void> => 
        {
            const response: Response = await request.get('/users/1').set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('test get user by id with false token', async (): Promise<void> => 
        {
            const response: Response = await request.get('/users/1').set('Authorization', `Bearer asdk;4flsdfweif`);
            expect(response.status).not.toBe(200);
        });

        it('test getting all users', async (): Promise<void> => {
            const response: Response = await request
                .get('/users')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
    });
    describe('products endpoints test', () => {
        it('test creating products endpoint', async (): Promise<void> => {
            const product:Product=
            {
                name:"bicycle",
                price:380
            }
            const response: Response = await request.post('/products').
                                             send(product).
                                             set('Authorization', `Bearer ${token}`);
                                             expect(response.status).toBe(200);
        });

        it('test getting product by id endpoint', async (): Promise<void> => {
            const response: Response = await request.get('/products/1').
                                             set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });

        it('test getting all products endpoint', async (): Promise<void> => {
            const response: Response = await request
                                       .get('/products')
                                       .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
        });
    });
    
    describe('orders endpoints test', () => 
    {
        it('test adding order', async (): Promise<void> => {
            const order:Order=
            {
                user_id:1,
                status:'active'
            }
            const user:User=
            {
                firstname:'Alijev',
                lastname:'orkhan',
                password: 'do-be-do'
            }
            await request.post('/users').send(user).set('Authorization', `Bearer ${token}`);
            const response: Response = await request
                .post('/orders')
                .send(order)
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        it('test addProduct to an order by order_id', async (): Promise<void> => {
            const order_product: OrderProduct =
            {
                order_id:1,
                product_id:1,
                quantity:12
            }
            const response: Response = await request
                .post('/orders/products')
                .send(order_product)
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
        
        it('test get Current Order By User_id', async (): Promise<void> => {
            const response: Response = await request
                .get('/orders/user/1/current')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
         
    });
   
});
