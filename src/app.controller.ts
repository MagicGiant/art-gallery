import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  start() {
    return { message: 'start index' };
  }

  @Get('revies')
  @Render('revies')
  revies() {
    return { message: 'nav to revies' };
  }

  @Get('index')
  @Render('index')
  index() {
    return { message: 'nav to index' };
  }
}
