import { config } from "@/config";
import { WebhookEventType } from "@clerk/backend";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { Webhook } from "svix";
import { UsersService } from "../users/users.service";

@Injectable()
export class WebhooksService {
  private readonly logger: Logger = new Logger(WebhooksService.name);

  constructor(private readonly usersService: UsersService) {}

  async clerkEvents(request: any) {
    this.logger.debug("Clerk events");
    this.logger.debug("request", request.rawBody);

    this.logger.debug("secret", config().clerk.webhookSecret);
    const wh = new Webhook(config().clerk.webhookSecret);

    // Get headers and body
    const headers = request.headers;
    const payload = request.body;

    // Get Svix headers for verification
    const svix_id = headers["svix-id"];
    const svix_timestamp = headers["svix-timestamp"];
    const svix_signature = headers["svix-signature"];

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new BadRequestException({
        success: false,
        message: "Error: Missing svix headers",
      });
    }

    let evt;

    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If verification fails, error out and return error code
    try {
      evt = wh.verify(JSON.stringify(payload), {
        "svix-id": svix_id as string,
        "svix-timestamp": svix_timestamp as string,
        "svix-signature": svix_signature as string,
      });
    } catch (err: any) {
      this.logger.error("Error verifying webhook", err);
      throw new BadRequestException({
        success: false,
        message: err.message,
      });
    }

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType: WebhookEventType = evt.type;

    this.logger.debug({ eventType });
    this.logger.debug(`Webhook with an ID of ${id} and type of ${eventType}`);

    // If the event type is 'user.created' then save user to db,
    switch (eventType) {
      case "user.created":
        this.logger.debug("User created");
        await this.usersService.createAccount(evt.data);
        break;
      case "user.updated":
        this.logger.debug("User updated");
        await this.usersService.updateUser(evt.data);
        break;
      default:
        this.logger.debug("Unknown event type");
        break;
    }

    return {
      success: true,
      eventType,
      data: evt.data,
    };
  }
}
