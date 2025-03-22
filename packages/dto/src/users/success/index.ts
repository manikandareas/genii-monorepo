import { z } from "zod";

/**
 * User role schema
 */
export const UserRoleSchema = z.enum(["USER", "ADMIN", "INSTRUCTOR"]);
export type UserRole = z.infer<typeof UserRoleSchema>;

/**
 * User response schema
 */
export const UserResponseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  role: UserRoleSchema,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type UserResponse = z.infer<typeof UserResponseSchema>;

/**
 * Paginated users response schema
 */
export const PaginatedUsersResponseSchema = z.object({
  data: z.array(UserResponseSchema),
  meta: z.object({
    currentPage: z.number(),
    itemCount: z.number(),
    itemsPerPage: z.number(),
    totalItems: z.number(),
    totalPages: z.number(),
  }),
});

export type PaginatedUsersResponse = z.infer<typeof PaginatedUsersResponseSchema>;

/**
 * Auth response schema
 */
export const AuthResponseSchema = z.object({
  user: UserResponseSchema,
  accessToken: z.string(),
  refreshToken: z.string().optional(),
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

/**
 * Token refresh response schema
 */
export const TokenRefreshResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string().optional(),
});

export type TokenRefreshResponse = z.infer<typeof TokenRefreshResponseSchema>;

export type UserStrikes = {};
