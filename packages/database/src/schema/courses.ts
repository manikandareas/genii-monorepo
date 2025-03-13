import { pgTable, uuid, varchar, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { users } from "./users";

/**
 * Courses table schema representing educational courses in the system
 */
export const courses = pgTable("courses", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  thumbnail: varchar("thumbnail", { length: 255 }),
  authorId: uuid("author_id")
    .references(() => users.id)
    .notNull(),
  level: varchar("level", { length: 20 }).notNull().default("beginner"),
  price: integer("price").default(0),
  isPublished: boolean("is_published").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
