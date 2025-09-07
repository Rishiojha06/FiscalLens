import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, 
    }));

  const config = new DocumentBuilder()
    .setTitle("FiscalLens API")
    .setDescription("API Documentation for FiscalLens")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
