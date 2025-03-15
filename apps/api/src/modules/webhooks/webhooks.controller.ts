import { Controller, Post, RawBodyRequest, Req } from "@nestjs/common";
import { WebhooksService } from "./webhooks.service";
import { Request } from "express";

@Controller("webhooks")
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  async webhook(@Req() request: RawBodyRequest<Request>) {
    console.log("request rawBody", request.body);
    return await this.webhooksService.clerkEvents(request);
  }
}
