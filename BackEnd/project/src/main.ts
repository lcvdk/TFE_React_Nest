import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  const config = new DocumentBuilder()
    .setTitle('Board Game Tournament API')
    .setDescription('Board Game Tournament API - Description \n\n tralalala \n mon lien à une image')
    .setVersion('1.0')
    .setContact("Laurent Vanderkelen","url", "lc.vanderkelen@gmail.com")
    .addTag('BoardGames')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document, {customCss : `
  body {
    background-color: rgb(45,80,90);
  }
  
  .swagger-ui .topbar {
    display:none;
  }

  .swagger-ui .info .title {
  color: #fff;
  font-family: sans-serif;
  font-size: 36px;
  margin: 0;
  }

  .swagger-ui .info p {
    color: #fff;
    font-family: sans-serif;
  }
    .swagger-ui .opblock .opblock-summary-description {
      color: #fff;
      font-family: sans-serif;
    }

  .swagger-ui .opblock .opblock-summary-path{
    color: #fff;
    font-family: sans-serif;
  }
  .swagger-ui .opblock-tag {
    color: #fff;
    font-family: sans-serif; 
  }

  .
 
    `});


  app.enableCors()

  await app.listen(5000);
}
bootstrap();
