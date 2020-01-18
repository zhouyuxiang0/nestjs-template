import { DatabaseConfig } from '../config/database.config';
import { Injectable, Inject } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

    @Inject() private readonly dbConfig: DatabaseConfig;

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.dbConfig.DB_HOST,
            port: this.dbConfig.DB_PORT,
            username: this.dbConfig.DB_USERNAME,
            password: this.dbConfig.DB_PASSWORD,
            database: this.dbConfig.DB_DATABASE,
            entities: [],
            synchronize: true,
        };
    }
}
