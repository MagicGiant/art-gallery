import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // Импортируем AppService

@Module({
  controllers: [AppController],
  providers: [AppService], // Добавляем AppService в провайдеры
})
export class AppModule {}
