import { MemberModule } from './app/member/member.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
      CoreModule,
      CommonModule,
      GraphQLModule.forRoot({
          useGlobalPrefix: true,
          path: '/api',
          context: ({ req }) => ({ req }),
          autoSchemaFile: 'schema.gql',
        }),
      MemberModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
