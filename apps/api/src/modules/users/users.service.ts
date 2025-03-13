import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UsersService {
  // This is a placeholder - in a real implementation, you would:
  // 1. Connect to the database
  // 2. Perform CRUD operations

  async findAll() {
    // Placeholder data
    return [
      { id: "1", name: "John Doe", email: "john@example.com" },
      { id: "2", name: "Jane Smith", email: "jane@example.com" },
    ];
  }

  async findOne(id: string) {
    // Placeholder data
    const users = [
      { id: "1", name: "John Doe", email: "john@example.com" },
      { id: "2", name: "Jane Smith", email: "jane@example.com" },
    ];

    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
}
