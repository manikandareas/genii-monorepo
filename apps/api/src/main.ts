import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { config } from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors();

  // Setup Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Genii API")
    .setDescription("The Genii API documentation")
    .setVersion("1.0")
    .addBearerAuth()
    .addTag("auth", "Authentication endpoints")
    .addTag("users", "User management endpoints")
    .addTag("courses", "Course management endpoints")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/docs", app, document);

  await app.listen(config().port || 3002);
  console.log(`Application is running on: http://localhost:${config().port || 3002}`);
}
bootstrap();
