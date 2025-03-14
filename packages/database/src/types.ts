import { Prisma, PrismaClient } from "@prisma/client";

// Export types from Prisma
export type User = Prisma.userGetPayload<{}>;
export type Course = Prisma.coursesGetPayload<{}>;
export type Module = Prisma.modulesGetPayload<{}>;
export type Unit = Prisma.unitsGetPayload<{}>;
export type Note = Prisma.notesGetPayload<{}>;
export type Bookmark = Prisma.bookmarksGetPayload<{}>;
export type Progress = Prisma.progressGetPayload<{}>;
export type Quiz = Prisma.quizGetPayload<{}>;
export type Question = Prisma.questionsGetPayload<{}>;
export type UserCourse = Prisma.user_coursesGetPayload<{}>;

// Use more generic types for input to avoid linter errors
export type NewUser = Omit<User, "id"> & { id?: string };
export type NewCourse = Omit<Course, "id"> & { id?: string };
export type NewModule = Omit<Module, "id"> & { id?: string };
export type NewUnit = Omit<Unit, "id"> & { id?: string };
export type NewNote = Omit<Note, "id"> & { id?: string };
export type NewBookmark = Omit<Bookmark, "id"> & { id?: string };
export type NewProgress = Omit<Progress, "id"> & { id?: string };
export type NewQuiz = Omit<Quiz, "id"> & { id?: string };
export type NewQuestion = Omit<Question, "id"> & { id?: string };
export type NewUserCourse = Omit<UserCourse, "id"> & { id?: string };

// Export a Record with all entity types for easy access
export type EntityTypes = {
  user: User;
  course: Course;
  module: Module;
  unit: Unit;
  note: Note;
  bookmark: Bookmark;
  progress: Progress;
  quiz: Quiz;
  question: Question;
  userCourse: UserCourse;
};

// Export the Prisma client type
export type PrismaDB = PrismaClient;
