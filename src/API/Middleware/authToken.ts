import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import environmentObject from '../Utils/EnvironmentVariables'

const tokenSecret = environmentObject.JWTSecretToken as Secret;

const AuthToken = async (Req: Request,Res: Response,next: NextFunction) =>
{
    try {
        const authorizationHeader = Req.headers.authorization;
        if (authorizationHeader)
          {
            const token = authorizationHeader?.split(' ')[1];
            jwt.verify(token, tokenSecret);
            return next();
          }
        return Res.status(401).json('Token not found, untrusted entity');
    } catch (err) {
        return Res.status(401)
            .json('unathuorized Access');
    }
}

export default AuthToken;