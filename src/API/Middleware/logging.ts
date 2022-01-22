import { Handler } from 'express';
import morgan from 'morgan';

export const logger: Handler = morgan('short');