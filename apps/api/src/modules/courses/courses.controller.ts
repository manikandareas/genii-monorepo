import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { Course } from "@genii/database";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Course> {
    return this.coursesService.findOne(id);
  }
}
