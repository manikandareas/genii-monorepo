import {
  CreateUserRequest,
  CreateUserRequestSchema,
  GetUsersQuery,
  GetUsersQuerySchema,
  LoginUserRequest,
  LoginUserRequestSchema,
  PaginatedUsersResponse,
  PaginatedUsersResponseSchema,
  UpdateUserRequest,
  UpdateUserRequestSchema,
  UserResponse,
  UserResponseSchema,
  AuthResponse,
  AuthResponseSchema,
} from "@genii/dto";
import { apiRequest } from "../core/better-fetch";
import { z } from "zod";

/**
 * Base endpoint for user-related API calls
 */
const USERS_ENDPOINT = "/api/users";

/**
 * Get a paginated list of users
 */
export const getUsers = async (params?: GetUsersQuery): Promise<PaginatedUsersResponse> => {
  return apiRequest({
    endpoint: USERS_ENDPOINT,
    method: "GET",
    responseSchema: PaginatedUsersResponseSchema,
    queryParams: params,
  });
};

/**
 * Get a user by ID
 */
export const getUserById = async (id: string): Promise<UserResponse> => {
  return apiRequest({
    endpoint: `${USERS_ENDPOINT}/${id}`,
    method: "GET",
    responseSchema: UserResponseSchema,
  });
};

/**
 * Create a new user
 */
export const createUser = async (userData: CreateUserRequest): Promise<UserResponse> => {
  return apiRequest({
    endpoint: USERS_ENDPOINT,
    method: "POST",
    requestSchema: CreateUserRequestSchema,
    responseSchema: UserResponseSchema,
    data: userData,
  });
};

/**
 * Update an existing user
 */
export const updateUser = async (
  id: string,
  userData: UpdateUserRequest
): Promise<UserResponse> => {
  return apiRequest({
    endpoint: `${USERS_ENDPOINT}/${id}`,
    method: "PATCH",
    requestSchema: UpdateUserRequestSchema,
    responseSchema: UserResponseSchema,
    data: userData,
  });
};

/**
 * Delete a user
 */
export const deleteUser = async (id: string): Promise<void> => {
  return apiRequest({
    endpoint: `${USERS_ENDPOINT}/${id}`,
    method: "DELETE",
    responseSchema: z.void(),
  });
};

/**
 * Login a user
 */
export const loginUser = async (credentials: LoginUserRequest): Promise<AuthResponse> => {
  return apiRequest({
    endpoint: "/api/auth/login",
    method: "POST",
    requestSchema: LoginUserRequestSchema,
    responseSchema: AuthResponseSchema,
    data: credentials,
  });
};

/**
 * Get the current authenticated user
 */
export const getCurrentUser = async (): Promise<UserResponse> => {
  return apiRequest({
    endpoint: "/api/auth/me",
    method: "GET",
    responseSchema: UserResponseSchema,
  });
};
