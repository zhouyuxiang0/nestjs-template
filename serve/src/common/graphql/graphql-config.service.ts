import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
    createGqlOptions(): GqlModuleOptions {
        return {
            typePaths: ['../../app/**/*.graphql'],
            autoSchemaFile: 'schema.gql',
        };
    }
}
