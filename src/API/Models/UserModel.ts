import bcrypt from 'bcrypt';
import DatabaseAdapter from '../Utils/DatabaseAdapter';
import { tokenGenerator } from '../Utils/tokenGenerator';
import User from '../Interfaces/User'
import environmentObject from '../Utils/EnvironmentVariables';
import { PoolClient, QueryResult } from 'pg';
import Token from '../Interfaces/Token';
export default class UserModel {
  // define table

  // select all users
  public async Index(): Promise<User[]> {
    try 
    {
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const sql: string = `SELECT * FROM users`;
      const result: QueryResult = await conn.query(sql);
      conn.release();
      return result.rows;
    } 
    catch (err) 
    {
      throw new Error(`Could not get all users. Error: ${err}`);
    }
  }

  // select user by id
  public async fetchUserById(user_id: number): Promise<User> 
  {
    try 
    {
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const sql: string = `SELECT * FROM users WHERE id = $1`;
      const result: QueryResult = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows[0];
    } 
    catch (err) 
    {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }

  // create a user
  async createUser(user: User): Promise<Token> {
    try 
    {
      const pepper: string = environmentObject.BcryptPepper as string;
      const salt: string = environmentObject.BcryptSalt as string;
      console.log(user.password);
      const hashPassword: string = bcrypt.hashSync(user.password + pepper,parseInt(salt));

      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const sql: string = `INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`;
      const result: QueryResult = await conn.query(sql, [user.firstname,user.lastname,hashPassword]);
      conn.release();
      const id: number = result.rows[0].id;
      const token: string = tokenGenerator(id);
      const returnedToken:Token= 
      {
        isAuthenticated: true,
        token:token
      };
      return returnedToken;      
    } 
    catch (err)
    {
      throw new Error(`Could not create user. Error: ${err}`);
    }
  }

  // delete user
  async deleteUser(id: number): Promise<User> 
  {
    try 
    {
      const sql: string = `DELETE FROM users WHERE id=$1 RETURNING *`;
      const conn: PoolClient = await DatabaseAdapter.getInstance().getClient().connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    }
    catch(err) 
    {
      throw new Error(`Could not delete user ${id}. Error: ${err}`);
    }
  }
}