import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/infrastructure/user.module";
import { EnvConfigModule } from "./shared/infrastructure/env-config/env-config.module";
import { DatabaseModule } from "./shared/infrastructure/database/database.module";

@Module({
  imports: [UserModule, EnvConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
