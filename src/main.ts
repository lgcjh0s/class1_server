import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Logger } from './common/common.logger';
import * as compression from 'compression';
import * as session from 'express-session';

async function bootstrap() {

  const logger = Logger();
  const exphbs = require('express-handlebars');
  const hbs = exphbs.create({
    extname: '.hbs',
    helpers: {
      comma: (num: number) => num.toLocaleString(),
      getBrImg: (brand: string) => {
        const brandImg = {
          'V': 'visa.png',
          'M': 'master.png'
        };
        return '../image/' + brandImg[brand];
      }
    }
  });
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'service'));
  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
  app.use(
    session({
      secret: 'wooricard-session',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 10 * 60 * 1000
      }
    })
  );

  await app.listen(3000);

  logger.info('Server started!');
}
bootstrap();