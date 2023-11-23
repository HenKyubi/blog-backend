// Utils
import { environments } from 'src/environments';

import * as dotenv from 'dotenv';

dotenv.config({ path: environments[process.env.NODE_ENV] || '.env' });

export const DB_HOST: string = process.env.DB_HOST;
export const DB_PORT: number = parseInt(process.env.DB_PORT);
export const DB_USERNAME: string = process.env.DB_USERNAME;
export const DB_PASSWORD: string = process.env.DB_PASSWORD;
export const DB_NAME: string = process.env.DB_NAME;
export const DB_SYNCHRONIZE: boolean = !!process.env.DB_SYNCHRONIZE;
export const JWT_SECRET: string = process.env.JWT_SECRET;
