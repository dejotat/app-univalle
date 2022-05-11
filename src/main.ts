import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import{ DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { addAbortSignal } from 'stream';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('products')
  .setDescription('This is my description')
  .setVersion('1.0')
  .addTag('products')
  .build();

  const document = SwaggerModule.createDocument(app,options);

  SwaggerModule.setup( 'api/docs', app, document, {
    explorer: true,
    swaggerOptions:{
      filter:true,
      showRequestDuration: true,
    },
  }
  );

  await app.listen(3030);
}
bootstrap();
