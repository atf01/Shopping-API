import {Request,Response, Router} from 'express';
import Token from '../Interfaces/Token'
import User from '../Interfaces/User';
import authToken from '../Middleware/authToken';
import UserModel from '../Models/UserModel';
export const  UserController:Router = Router();

const  CreateUser =async (Req:Request,Res:Response) =>
{
    try
    {
        const user:User = Req.body;
        const data:Token = await new UserModel().createUser(user);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}
const  IndexUsers =async (Req:Request,Res:Response) =>
{
    try
    {
        const data:User[] = await new UserModel().Index();
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const  fetchUser =async (Req:Request,Res:Response) =>
{
    try
    {
        const id = parseInt(Req.params.id);
        const data:User = await new UserModel().fetchUserById(id);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const deleteUser = async (Req:Request,Res:Response) =>
{
    try
    {
        const id = parseInt(Req.params.id);
        const data:User = await new UserModel().deleteUser(id);
        Res.status(200);
        return Res.json('deleted successfully!');
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}


UserController.post('/',CreateUser);
UserController.get('/',authToken,IndexUsers);
UserController.get('/:id',authToken,fetchUser);
UserController.delete('/:id',authToken,deleteUser);

