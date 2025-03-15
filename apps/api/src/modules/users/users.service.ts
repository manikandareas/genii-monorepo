import { PrismaService } from "@/common/database.service";
import { UserJSON } from "@clerk/backend";
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from "@nestjs/common";

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);
  constructor(private readonly db: PrismaService) {}

  async createAccount(user: UserJSON) {
    try {
      this.logger.debug("Creating user", user);
      const existingUser = await this.db.user.findUnique({
        where: { id: user.id },
      });

      if (existingUser) {
        this.logger.debug("User already exists", existingUser);
        return existingUser;
      }

      this.logger.debug("Creating new user", user);
      this.logger.debug("User email", user.email_addresses[0].email_address);
      const newUser = await this.db.user.create({
        data: {
          id: user.id,
          email: user.email_addresses[0].email_address,
          name: user.first_name,
          username: user.username,
          image: user.image_url,
          is_already_onboard: false,
        },
      });

      return newUser;
    } catch (error) {
      this.logger.error("Error creating user", error);
      throw new InternalServerErrorException("Failed to create user");
    }
  }

  async updateUser(user: UserJSON) {
    try {
      const updatedUser = await this.db.user.update({
        where: { id: user.id },
        data: {
          name: `${user.first_name} ${user.last_name}`,
          username: user.username,
          image: user.image_url,
          is_already_onboard: user.public_metadata.is_already_onboard,
        },
      });

      return updatedUser;
    } catch (error) {
      this.logger.error("Error updating user", error);
      throw new InternalServerErrorException("Failed to update user");
    }
  }

  async findAll() {
    try {
      // Using Prisma client to fetch all users
      return await this.db.user.findMany();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new InternalServerErrorException("Failed to retrieve users");
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.db.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error finding user ${id}:`, error);
      throw new InternalServerErrorException(`Failed to retrieve user ${id}`);
    }
  }
}
