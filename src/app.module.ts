import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import handlebarConfig from './handlebars.config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'HANDLEBARS_CONFIG',
      useValue: handlebarConfig,
    }
  ],
})
export class AppModule {}
