import { pgTable, uuid, varchar, text, timestamp, integer } from "drizzle-orm/pg-core";
import { courses } from "./courses";

/**
 * Lessons table schema representing individual lessons within courses
 */
export const lessons = pgTable("lessons", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  courseId: uuid("course_id")
    .references(() => courses.id)
    .notNull(),
  order: integer("order").notNull(),
  videoUrl: varchar("video_url", { length: 255 }),
  duration: integer("duration"), // in minutes
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
