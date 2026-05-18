import { NestFactory } from "@nestjs/core";
import { ApplicationExceptionFilter } from "./shared/infrastructure/http/application-exception.filter";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
  app.useGlobalFilters(new ApplicationExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
