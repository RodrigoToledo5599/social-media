import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use((req, res, next) => {
    console.log('HEADERS RECEIVED >>', req.headers);
    next();
  });

  app.enableCors({
    origin: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'auth_token'
    ]
  });

  await app.listen(process.env.PORT || 3000);
}

bootstrap();