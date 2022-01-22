import environmentObject from "./EnvironmentVariables";
import { Pool } from "pg";
import connectionObject from './DatabaseConnectionObject'
export default class DatabaseAdapter
{
  private static Adapter:DatabaseAdapter;
  private client:Pool= new Pool;
  private constructor(){
    this.client = new Pool({
        user:connectionObject.user,
        password:connectionObject.password,
        host:connectionObject.host,
        database:connectionObject.database,
        port:connectionObject.port,  
    });
  }
  public static  getInstance():DatabaseAdapter
  {
    if(!DatabaseAdapter.Adapter)
    {
        DatabaseAdapter.Adapter = new DatabaseAdapter();
    }
    return this.Adapter;
  }
  public getClient()
  {
      return this.client;
  }
}