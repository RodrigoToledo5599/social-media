import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


async function bootstrap() {
  try {
    console.log('🔧 Iniciando bootstrap...');
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    console.log('✅ AppModule carregado.');

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    console.log('✅ Pipes carregados.');

    // app.use((req, res, next) => {
    //   console.log('HEADERS RECEIVED >>', req.headers);
    //   next();
    // });

    app.use((req: Request, res: Response, next: NextFunction) => {
      try {
        console.log('HEADERS RECEBIDOS:', req.headers);
      } catch (err) {
        console.error('Erro ao imprimir headers:', err);
      }
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

    // await app.listen(process.env.PORT || 3000);
    await app.listen(3000, '0.0.0.0');
  } catch (error) {
    console.error('❌ Erro no bootstrap:', error);
  }

}

bootstrap();