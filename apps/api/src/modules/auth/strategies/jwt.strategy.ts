import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private prisma: PrismaClient;

  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_SECRET"),
    });
    this.prisma = new PrismaClient();
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
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
      throw new UnauthorizedException("User not found");
    }

    return user;
  }
}
