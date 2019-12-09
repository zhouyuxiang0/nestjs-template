import { DatabaseConfig } from './config/database.config';
import { GraphqlConfigService } from './graphql/graphql-config.service';
import { TypeOrmConfigService } from './typeorm/typeorm-config.service';
import { Module, Global } from '@nestjs/common';
import { buildConfigProviders } from './config/factory/build-config-providers';
import { configList } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AllinpayConfig } from './config/allinpay.config';

const configProviders = buildConfigProviders();

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
        }),
        GraphQLModule.forRootAsync({
            useClass: GraphqlConfigService,
        }),
    ],
    exports: [...configList],
    providers: [...configProviders],
})
export class CommonModule {}
