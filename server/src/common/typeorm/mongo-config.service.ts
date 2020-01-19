import { Injectable, Inject } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MongoConfig } from "../config";
import { resolve } from "path";

@Injectable()
export class MongoConfigService implements TypeOrmOptionsFactory {

    @Inject() private readonly dbConfig: MongoConfig;

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
            host: this.dbConfig.MONGO_HOST,
            port: this.dbConfig.MONGO_PORT,
            username: this.dbConfig.MONGO_USERNAME,
            password: this.dbConfig.MONGO_PASSWORD,
            database: this.dbConfig.MONGO_DATABASE,
            entities: [`${resolve(__dirname, '../', '../')}/**/*.entity{.ts,.js}`],
            synchronize: true,
        };
    }
}
