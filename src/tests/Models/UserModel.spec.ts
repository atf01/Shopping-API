import User from "../../API/Interfaces/User";
import UserModel from "../../API/Models/UserModel";
import Token from "../../API/Interfaces/Token";
import DatabaseAdapter from "../../API/Utils/DatabaseAdapter";

const userModel = new UserModel();

describe('User Model', () => {

    afterAll( async ()=>{
        try 
        {
             const conn = await DatabaseAdapter.getInstance().getClient().connect();
             const sql_users = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
             await conn.query(sql_users);
             conn.release();
        }
        catch (err) 
        {
             throw new Error(`err: ${err}`);
        }
    });


    it('test userModel create', async (): Promise<void> => {

        const user:User= 
        {
             id:1,
             firstname: 'Ahmed',
             lastname : 'Taha',
             password : 'shhhhhhh-secret'
         }

        const data:Token = await userModel.createUser(user);

        expect(data.isAuthenticated).toEqual(true);
    });

    it('test userModel index', async (): Promise<void> => {
        const user:User= 
        {
             id:1,
             firstname: 'Ahmed',
             lastname : 'Taha',
             password : 'shhhhhhh-secret'
         }
        const data = await userModel.Index();
        expect(data[0].firstname).toEqual(user.firstname);
        expect(data[0].lastname).toEqual(user.lastname);
    });

    it('test userModel show', async (): Promise<void> => {
        const user:User= 
        {
             id:1,
             firstname: 'Ahmed',
             lastname : 'Taha',
             password : 'shhhhhhh-secret'
         }
        const data = await userModel.fetchUserById(1);
        expect(data.firstname).toEqual(user.firstname);
        expect(data.lastname).toEqual(user.lastname);
    });
    beforeAll(async ()=>{
        try 
        {
             const conn = await DatabaseAdapter.getInstance().getClient().connect();
             const trancuate = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
             await conn.query(trancuate);
             
             conn.release();
        }
        catch (err) 
        {
             throw new Error(`err: ${err}`);
        }
    })
});