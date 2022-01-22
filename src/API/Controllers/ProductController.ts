import {Request,Response, Router} from 'express';
import Product from '../Interfaces/Product';
import authToken from '../Middleware/authToken';
import ProductModel from '../Models/ProductModel';
export const  ProductController:Router = Router();

const  CreateProduct =async (Req:Request,Res:Response) =>
{
    try
    {
        const product:Product = Req.body;
        const data:Product = await new ProductModel().createProduct(product)
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}
const  IndexProducts =async (Req:Request,Res:Response) =>
{
    try
    {
        const data:Product[] = await new ProductModel().Index();
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const  fetchProduct =async (Req:Request,Res:Response) =>
{
    try
    {
        const id = parseInt(Req.params.id);
        const data:Product = await new ProductModel().fetchProductById(id);
        Res.status(200);
        return Res.json(data);
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}

const deleteProduct = async (Req:Request,Res:Response) =>
{
    try
    {
        const id = parseInt(Req.params.id);
        const data:Product = await new ProductModel().deleteProduct(id);
        Res.status(200);
        return Res.json('deleted successfully!');
    }
    catch(err)
    {
        Res.status(400);
        Res.json('something went wrong');
    }
}


ProductController.post('/',CreateProduct);
ProductController.get('/',authToken,IndexProducts);
ProductController.get('/:id',authToken,fetchProduct);
ProductController.delete('/:id',authToken,deleteProduct);

