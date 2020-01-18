import { BaseConfig } from './base.config';
import { Injectable } from '@nestjs/common';
import { ObjectSchema, object, string, number, boolean } from 'joi';

@Injectable()
export class MongoConfig extends BaseConfig {
    protected validatorSchema(): ObjectSchema {
        return object({
            MONGO_HOST: string().default().required(),
            MONGO_PORT: number().default().required(),
            MONGO_DATABASE: string().default().required(),
            MONGO_USERNAME: string().default().required(),
            MONGO_PASSWORD: string().default().required(),
        });
    }

    get MONGO_HOST(): string {
        return this.envConfig.MONGO_HOST;
    }

    get MONGO_PORT(): number {
        return +this.envConfig.MONGO_PORT;
    }

    get MONGO_DATABASE(): string {
        return this.envConfig.MONGO_DATABASE;
    }

    get MONGO_USERNAME(): string {
        return this.envConfig.MONGO_USERNAME;
    }

    get MONGO_PASSWORD(): string {
        return this.envConfig.MONGO_PASSWORD;
    }
}
