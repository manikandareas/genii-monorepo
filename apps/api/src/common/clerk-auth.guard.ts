import { config } from "@/config";
import clerkClient from "@clerk/backend";
import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger();

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    try {
      await clerkClient.verifyToken(request.cookies.__session, {
        secretKey: config().clerk.secretKey,
      });
    } catch (err) {
      this.logger.error(err);
      return false;
    }

    return true;
  }
}
