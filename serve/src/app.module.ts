import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
