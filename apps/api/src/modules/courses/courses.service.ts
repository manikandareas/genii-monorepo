import { PrismaService } from "@/common/database.service";
import { DB } from "@genii/database";
import {
  Injectable,
  NotFoundException,
  Inject,
  InternalServerErrorException,
} from "@nestjs/common";

@Injectable()
export class CoursesService {
  constructor(private readonly db: PrismaService) {}

  async findAll() {
    try {
      // Using Prisma client to fetch all courses
      return await this.db.courses.findMany();
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw new InternalServerErrorException("Failed to retrieve courses");
    }
  }

  async findOne(id: string) {
    try {
      const course = await this.db.courses.findUnique({
        where: { id },
      });

      if (!course) {
        throw new NotFoundException(`Course with ID ${id} not found`);
      }

      return course;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error finding course ${id}:`, error);
      throw new InternalServerErrorException(`Failed to retrieve course ${id}`);
    }
  }
}
