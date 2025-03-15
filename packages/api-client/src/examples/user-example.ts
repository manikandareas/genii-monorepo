/**
 * This file contains examples of how to use the API client.
 * It is not meant to be executed, but rather to serve as a reference.
 */

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getCurrentUser,
} from "../users";

/**
 * Example: Get a paginated list of users
 */
async function getUsersExample() {
  try {
    const result = await getUsers({
      page: 1,
      limit: 10,
      search: "john",
      sortBy: "name",
      sortOrder: "asc",
    });

    console.log(`Found ${result.meta.totalItems} users`);
    result.data.forEach((user) => {
      console.log(`- ${user.name} (${user.email})`);
    });

    return result;
  } catch (error) {
    console.error("Failed to get users:", error);
    throw error;
  }
}

/**
 * Example: Get a user by ID
 */
async function getUserByIdExample(userId: string) {
  try {
    const user = await getUserById(userId);
    console.log(`User details: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error(`Failed to get user with ID ${userId}:`, error);
    throw error;
  }
}

/**
 * Example: Create a new user
 */
async function createUserExample() {
  try {
    const newUser = await createUser({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "securePassword123",
    });

    console.log(`User created with ID: ${newUser.id}`);
    return newUser;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
}

/**
 * Example: Update an existing user
 */
async function updateUserExample(userId: string) {
  try {
    const updatedUser = await updateUser(userId, {
      name: "John Updated",
      email: "john.updated@example.com",
    });

    console.log(`User updated: ${updatedUser.name} (${updatedUser.email})`);
    return updatedUser;
  } catch (error) {
    console.error(`Failed to update user with ID ${userId}:`, error);
    throw error;
  }
}

/**
 * Example: Delete a user
 */
async function deleteUserExample(userId: string) {
  try {
    await deleteUser(userId);
    console.log(`User with ID ${userId} deleted successfully`);
  } catch (error) {
    console.error(`Failed to delete user with ID ${userId}:`, error);
    throw error;
  }
}

/**
 * Example: Login a user
 */
async function loginUserExample() {
  try {
    const authResult = await loginUser({
      email: "john.doe@example.com",
      password: "securePassword123",
      rememberMe: true,
    });

    console.log(`User logged in: ${authResult.user.name}`);
    console.log(`Access token: ${authResult.accessToken.substring(0, 10)}...`);

    // Store tokens in your application's state or storage
    // localStorage.setItem('accessToken', authResult.accessToken);
    // if (authResult.refreshToken) {
    //   localStorage.setItem('refreshToken', authResult.refreshToken);
    // }

    return authResult;
  } catch (error) {
    console.error("Failed to login:", error);
    throw error;
  }
}

/**
 * Example: Get the current authenticated user
 */
async function getCurrentUserExample() {
  try {
    // Note: This assumes you have set up authentication headers
    // in your application's fetch configuration
    const currentUser = await getCurrentUser();
    console.log(`Current user: ${currentUser.name} (${currentUser.email})`);
    return currentUser;
  } catch (error) {
    console.error("Failed to get current user:", error);
    throw error;
  }
}

// Example of how to use these functions in an application
async function runExamples() {
  try {
    // Login first to get authentication tokens
    const auth = await loginUserExample();

    // Get the current user
    const currentUser = await getCurrentUserExample();

    // Get a list of users
    const users = await getUsersExample();

    // Get a specific user
    if (users.data.length > 0) {
      const userId = users.data[0].id;
      await getUserByIdExample(userId);
    }

    // Create a new user
    const newUser = await createUserExample();

    // Update the new user
    await updateUserExample(newUser.id);

    // Delete the user
    await deleteUserExample(newUser.id);

    console.log("All examples completed successfully");
  } catch (error) {
    console.error("Error running examples:", error);
  }
}
