export * from './database.config';
export * from './mongo.config';

import { DatabaseConfig } from './database.config';
import { AllinpayConfig } from './allinpay.config';
import { MongoConfig } from './mongo.config';


export const configList = [AllinpayConfig, DatabaseConfig, MongoConfig];
