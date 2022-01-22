import dotenv from 'dotenv';

dotenv.config();

interface EnvironmentObject
{
    DevelopmentDB:string|undefined,
    TestingDB:string|undefined,
    DatabasePort:string|undefined,
    DatabaseDriver:string|undefined,
    DatabaseUser:string|undefined,
    DatabaseUserPassword:string|undefined,
    BcryptPepper:string|undefined,
    BcryptSalt:string|undefined,
    JWTSecretToken:string|undefined,
    DatabaseHost:string|undefined,
    WorkEnvironment:string|undefined
}

const 
{
    DB_DRIVER,
    DB_DEV,
    DB_USER,
    DB_TEST,
    DB_HOST,
    DB_PORT,
    DB_PASSWORD,
    PASS_SALT,
    PASS_PEPPER,
    JWT_TOKEN_SECRET,
    ENV,
} = process.env;

const environmentObject:EnvironmentObject ={
    DevelopmentDB:DB_DEV,
    TestingDB:DB_TEST,
    DatabasePort:DB_PORT,
    DatabaseDriver:DB_DRIVER,
    DatabaseUser:DB_USER,
    DatabaseUserPassword:DB_PASSWORD,
    BcryptPepper:PASS_PEPPER,
    BcryptSalt:PASS_SALT,
    JWTSecretToken:JWT_TOKEN_SECRET,
    DatabaseHost:DB_HOST,
    WorkEnvironment:ENV
}

export default environmentObject;