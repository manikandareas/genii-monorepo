import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { EmailsService } from "./emails.service";

interface SendVerificationEmailDto {
  email: string;
  verificationLink: string;
}

interface SendChangeEmailVerificationDto {
  email: string;
  verificationLink: string;
}

@Controller("emails")
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post("send-verification")
  @HttpCode(HttpStatus.OK)
  async sendVerificationEmail(@Body() dto: SendVerificationEmailDto) {
    const result = await this.emailsService.sendVerificationCode(
      dto.email,
      "Verify your email address",
      `Click the link to verify your email: ${dto.verificationLink}`,
      dto.verificationLink
    );

    return { success: result };
  }

  @Post("send-change-email-verification")
  @HttpCode(HttpStatus.OK)
  async sendChangeEmailVerification(@Body() dto: SendChangeEmailVerificationDto) {
    const result = await this.emailsService.sendChangeEmailVerificationCode(
      dto.email,
      "Confirm your email change",
      `Click the link to verify request change email: ${dto.verificationLink}`,
      dto.verificationLink
    );

    return { success: result };
  }
}
