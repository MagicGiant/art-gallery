import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  hbs.registerPartials(path.join(__dirname, '..', 'views', 'partials')); 

  app.setBaseViewsDir('views');
  app.setViewEngine('hbs');

  // app.set('view options', { layout: 'layouts/main' }); 

  const port = 3000;
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();