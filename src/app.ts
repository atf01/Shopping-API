import express, { Application } from 'express';
import cors from 'cors';
import { logger } from './API/Middleware/logging';
import {appRouter} from './API/Routers/app-router';
import authToken from './API/Middleware/authToken';
export const app: Application = express();

app.use(cors({optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(logger);
appRouter(app);
