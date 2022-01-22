import { Application, Router } from "express";
import {UserController} from '../Controllers/UserController';
import {ProductController} from '../Controllers/ProductController';
import {OrderController} from '../Controllers/OrderController';

export const appRouter: Function = (app:Application): void =>{
  
    app.use('/users',UserController);
    app.use('/products',ProductController);
    app.use('/orders',OrderController);
  
}