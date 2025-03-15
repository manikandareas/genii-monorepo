import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./common/database.module";
import { CoursesModule } from "./modules/courses/courses.module";
import { UsersModule } from "./modules/users/users.module";
import { WebhooksModule } from "./modules/webhooks/webhooks.module";
import { config } from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    UsersModule,
    CoursesModule,
    WebhooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
