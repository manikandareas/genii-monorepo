import { Module } from "@nestjs/common";
import { WebhooksService } from "./webhooks.service";
import { WebhooksController } from "./webhooks.controller";
import { UsersModule } from "../users/users.module";

@Module({
  controllers: [WebhooksController],
  providers: [WebhooksService],
  imports: [UsersModule],
})
export class WebhooksModule {}
