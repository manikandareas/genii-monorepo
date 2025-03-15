import { config } from "@/config";
import { Injectable } from "@nestjs/common";
import { Resend } from "resend";
import ConfirmationCode from "./templates/confirmation-code";
import ChangeEmailConfirmationCode from "./templates/change-email-confirmation-code";

@Injectable()
export class EmailsService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(config().email.resendApiKey);
  }

  async sendVerificationCode(to: string, subject: string, text: string, verificationLink: string) {
    try {
      const { error, data } = await this.resend.emails.send({
        from: config().email.from,
        to,
        subject,
        text,
        react: <ConfirmationCode verificationLink={verificationLink} />,
      });

      if (error) {
        console.error("Resend error:", error);
        return false;
      }

      console.log("Email sent:", data);
      return true;
    } catch (error) {
      console.error("Unexpected error:", error);
      return false;
    }
  }

  async sendChangeEmailVerificationCode(
    to: string,
    subject: string,
    text: string,
    verificationLink: string
  ) {
    try {
      const { error, data } = await this.resend.emails.send({
        from: config().email.from,
        to,
        subject,
        text,
        react: <ChangeEmailConfirmationCode verificationLink={verificationLink} />,
      });

      if (error) {
        console.error("Resend error:", error);
        return false;
      }

      console.log("Email sent:", data);
      return true;
    } catch (error) {
      console.error("Unexpected error:", error);
      return false;
    }
  }
}
