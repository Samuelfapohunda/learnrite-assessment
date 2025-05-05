import * as env from 'env-var';
import { config } from 'dotenv';


config();

export const JWT_SECRET = env.get('JWT_SECRET').asString();
export const JWT_REFRESH_SECRET = env.get('JWT_REFRESH_SECRET').asString();
export const DB_HOST = env.get('DB_HOST').asString();
export const DB_PORT = env.get('DB_PORT').asInt();
export const DB_USERNAME = env.get('DB_USERNAME').asString();
export const DB_PASS = env.get('DB_PASS').asString();
export const DB_NAME = env.get('DB_NAME').asString();