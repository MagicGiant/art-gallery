import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  getTitle(): string {
    return 'Заголовок страницы';
  }
}