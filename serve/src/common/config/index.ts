export * from './database.config';

import { DatabaseConfig } from './database.config';
import { AllinpayConfig } from './allinpay.config';

export const configList = [AllinpayConfig, DatabaseConfig];
