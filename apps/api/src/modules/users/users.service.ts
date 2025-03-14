import { DB, User } from "@genii/database";
import {
  Injectable,
  NotFoundException,
  Inject,
  InternalServerErrorException,
} from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(@Inject("DATABASE_CLIENT") private readonly db: DB) {}

  // Mock data for fallback

  async findAll(): Promise<User[]> {
    try {
      // Using Prisma client to fetch all users
      return await this.db.user.findMany();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new InternalServerErrorException("Failed to retrieve users");
    }
  }

  async findOne(id: string): Promise<User> {
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
