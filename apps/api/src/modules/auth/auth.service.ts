import { Injectable, ConflictException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto, RegisterDto } from "@genii/dto";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor(private readonly jwtService: JwtService) {
    this.prisma = new PrismaClient();
  }

  async register(registerDto: RegisterDto) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException("User with this email already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Create user and account in a transaction
    const result = await this.prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          id: uuidv4(),
          name: registerDto.name,
          email: registerDto.email,
          email_verified: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });

      // Create account with password
      await tx.account.create({
        data: {
          id: uuidv4(),
          account_id: uuidv4(),
          provider_id: "credentials",
          user_id: user.id,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });

      return user;
    });

    // Generate JWT token
    const payload = { email: result.email, sub: result.id };

    return {
      message: "User registered successfully",
      user: {
        id: result.id,
        name: result.name,
        email: result.email,
      },
      token: this.jwtService.sign(payload),
    };
  }

  async login(loginDto: LoginDto) {
    try {
      // Find user by email
      const user = await this.prisma.user.findUnique({
        where: { email: loginDto.email },
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
      const isPasswordValid = await bcrypt.compare(loginDto.password, account.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException("Invalid email or password");
      }

      // Generate JWT token
      const payload = { email: user.email, sub: user.id };

      return {
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          is_admin: user.is_admin,
          is_already_onboard: user.is_already_onboard,
          image: user.image,
        },
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.error("Login error:", error);
      throw new UnauthorizedException("Invalid credentials");
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const account = await this.prisma.account.findFirst({
      where: { user_id: user.id },
      select: { password: true },
    });

    if (!account || !account.password) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      return null;
    }

    const { password: _, ...result } = account;
    return { ...user, ...result };
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        is_admin: true,
        is_already_onboard: true,
        image: true,
      },
    });
  }
}
