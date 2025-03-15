import { z } from "zod";

/**
 * Base user fields schema
 */
const BaseUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
});

/**
 * Create user request schema
 */
export const CreateUserRequestSchema = BaseUserSchema.extend({
  password: z.string().min(8).max(100),
});

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;

/**
 * Update user request schema
 */
export const UpdateUserRequestSchema = BaseUserSchema.partial().extend({
  currentPassword: z.string().min(8).max(100).optional(),
  newPassword: z.string().min(8).max(100).optional(),
});

export type UpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;

/**
 * User login request schema
 */
export const LoginUserRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  rememberMe: z.boolean().optional().default(false),
});

export type LoginUserRequest = z.infer<typeof LoginUserRequestSchema>;

/**
 * Get users query parameters schema
 */
export const GetUsersQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().optional().default(10),
  search: z.string().optional(),
  sortBy: z.enum(["name", "email", "createdAt"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export type GetUsersQuery = z.infer<typeof GetUsersQuerySchema>;
