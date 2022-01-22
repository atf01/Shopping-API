import environmentObject from "./EnvironmentVariables";

interface ConnectionObject
{
    user:string,
    password:string,
    host:string,
    database:string,
    port:number,  
}

const connectionObject:ConnectionObject =
{
    user:environmentObject.DatabaseUser as string,
    password:environmentObject.DatabaseUserPassword as string,
    host:environmentObject.DatabaseHost as string,
    database:environmentObject.WorkEnvironment==='dev'?environmentObject.DevelopmentDB as string
    :environmentObject.TestingDB as string,
    port:parseInt(environmentObject.DatabasePort as string)
}
export default connectionObject;