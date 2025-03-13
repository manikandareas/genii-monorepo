import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class CoursesService {
  // This is a placeholder - in a real implementation, you would:
  // 1. Connect to the database
  // 2. Perform CRUD operations

  async findAll() {
    // Placeholder data
    return [
      {
        id: "1",
        title: "Introduction to TypeScript",
        description: "Learn the basics of TypeScript",
        authorId: "1",
        level: "beginner",
        price: 0,
      },
      {
        id: "2",
        title: "Advanced React Patterns",
        description: "Master advanced React patterns and techniques",
        authorId: "2",
        level: "advanced",
        price: 29,
      },
    ];
  }

  async findOne(id: string) {
    // Placeholder data
    const courses = [
      {
        id: "1",
        title: "Introduction to TypeScript",
        description: "Learn the basics of TypeScript",
        authorId: "1",
        level: "beginner",
        price: 0,
      },
      {
        id: "2",
        title: "Advanced React Patterns",
        description: "Master advanced React patterns and techniques",
        authorId: "2",
        level: "advanced",
        price: 29,
      },
    ];

    const course = courses.find((course) => course.id === id);

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return course;
  }
}
