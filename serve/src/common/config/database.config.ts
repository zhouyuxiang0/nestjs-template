import { BaseConfig } from './base.config';
import { Injectable } from '@nestjs/common';
import { ObjectSchema, object, string, number, boolean } from 'joi';

@Injectable()
export class DatabaseConfig extends BaseConfig {
    protected validatorSchema(): ObjectSchema {
        return object({
            DB_HOST: string().default().required(),
            DB_PORT: number().default().required(),
            DB_DATABASE: string().default().required(),
            DB_USERNAME: string().default().required(),
            DB_PASSWORD: string().default().required(),
        });
    }

    get DB_HOST(): string {
        return this.envConfig.DB_HOST;
    }

    get DB_PORT(): number {
        return +this.envConfig.DB_PORT;
    }

    get DB_DATABASE(): string {
        return this.envConfig.DB_DATABASE;
    }

    get DB_USERNAME(): string {
        return this.envConfig.DB_USERNAME;
    }

    get DB_PASSWORD(): string {
        return this.envConfig.DB_PASSWORD;
    }
}
