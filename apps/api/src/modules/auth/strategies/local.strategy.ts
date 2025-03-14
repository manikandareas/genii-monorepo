import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private prisma: PrismaClient;

  constructor() {
    super({
      usernameField: "email",
    });
    this.prisma = new PrismaClient();
  }

  async validate(email: string, password: string): Promise<any> {
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        is_admin: true,
        is_already_onboard: true,
        image: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Find account with password
    const account = await this.prisma.account.findFirst({
      where: { user_id: user.id },
      select: { password: true },
    });

    if (!account || !account.password) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid email or password");
    }

    return user;
  }
}
