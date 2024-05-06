import * as exphbs from 'express-handlebars';
import { join } from 'path';

const handlebarConfig = exphbs.create({
  layoutsDir: join(__dirname, '..', 'views', 'layouts'),
  partialsDir: join(__dirname, '..', 'views', 'partials'),
  extname: '.hbs',
  helpers: {
  },
});

export default handlebarConfig;
