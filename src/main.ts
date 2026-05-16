import { NestFactory } from "@nestjs/core";
import { ApplicationExceptionFilter } from "./shared/infrastructure/http/application-exception.filter";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ApplicationExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
