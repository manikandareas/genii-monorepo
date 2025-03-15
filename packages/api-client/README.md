# @genii/api-client

A type-safe API client for the Genii application, built with Better Fetch and Zod.

## Overview

This package provides a robust API client with:
- Type-safe API requests and responses
- Request validation using Zod schemas
- Standardized error handling
- Automatic response parsing

## Installation

```bash
# Using npm
npm install @genii/api-client

# Using yarn
yarn add @genii/api-client

# Using pnpm
pnpm add @genii/api-client
```

## Usage

### Basic Usage

```typescript
import { getUserById, createUser } from '@genii/api-client';

// Get a user by ID
const user = await getUserById('123');

// Create a new user
const newUser = await createUser({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'securePassword123'
});
```

### Using the API Request Function Directly

```typescript
import { apiRequest } from '@genii/api-client';
import { z } from 'zod';

// Define a schema for your response
const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

type Product = z.infer<typeof ProductSchema>;

// Make a request with custom schema
const getProduct = async (id: string): Promise<Product> => {
  return apiRequest({
    endpoint: `/api/products/${id}`,
    method: 'GET',
    responseSchema: ProductSchema,
  });
};
```

### Making Authenticated Requests

```typescript
import { apiRequest, loginUser } from '@genii/api-client';

// Login to get authentication tokens
const auth = await loginUser({
  email: 'user@example.com',
  password: 'password123',
});

// Store the token (implementation depends on your app)
localStorage.setItem('authToken', auth.accessToken);

// Make an authenticated request
const makeAuthenticatedRequest = async () => {
  return apiRequest({
    endpoint: '/api/protected-resource',
    method: 'GET',
    responseSchema: YourResponseSchema,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });
};
```

## Available API Endpoints

### User Endpoints

- `getUsers(params?: GetUsersQuery)` - Get a paginated list of users
- `getUserById(id: string)` - Get a user by ID
- `createUser(userData: CreateUserRequest)` - Create a new user
- `updateUser(id: string, userData: UpdateUserRequest)` - Update an existing user
- `deleteUser(id: string)` - Delete a user
- `loginUser(credentials: LoginUserRequest)` - Login a user
- `getCurrentUser()` - Get the current authenticated user

## Advanced Usage

### Custom Error Handling

```typescript
import { apiRequest } from '@genii/api-client';

try {
  const result = await apiRequest({
    endpoint: '/api/resource',
    method: 'GET',
    responseSchema: YourSchema,
  });
  // Handle success
} catch (error) {
  // Custom error handling
  console.error('API request failed:', error.message);
  // Show user-friendly error message
}
```

### Advanced Error Handling

```typescript
import { apiRequest } from '@genii/api-client';

try {
  const result = await apiRequest({
    endpoint: '/api/resource',
    method: 'GET',
    responseSchema: YourSchema,
  });
  // Handle success
} catch (error) {
  if (error.message.includes('Resource not found')) {
    // Handle 404 not found error
    showNotFoundMessage();
  } else if (error.message.includes('Authentication required')) {
    // Handle 401 unauthorized error
    redirectToLogin();
  } else if (error.message.includes('Too many requests')) {
    // Handle 429 rate limit error
    showRateLimitMessage();
  } else if (error.message.includes('An unexpected server error occurred')) {
    // Handle 500 internal server error
    showServerErrorMessage();
  } else if (error.message.includes('The service is currently unavailable')) {
    // Handle 503 service unavailable error
    showServiceUnavailableMessage();
  } else {
    // Handle other errors
    showGenericErrorMessage(error.message);
  }
}
```

### Handling Specific HTTP Status Codes

The API client handles a comprehensive set of HTTP status codes:

- **400 Bad Request**: Validation errors with detailed field information
- **401 Unauthorized**: Authentication errors when credentials are invalid or missing
- **403 Forbidden**: Permission errors when the user lacks access rights
- **404 Not Found**: Resource not found errors
- **409 Conflict**: Resource conflicts (e.g., duplicate entries)
- **422 Unprocessable Entity**: Semantic validation errors
- **429 Too Many Requests**: Rate limiting errors with retry information
- **500 Internal Server Error**: Server-side errors with optional trace IDs
- **503 Service Unavailable**: Service outage errors with retry information
- **504 Gateway Timeout**: Request timeout errors

### Using with React Query

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';
import { getUserById, createUser } from '@genii/api-client';

// Query hook for fetching a user
const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
  });
};

// Mutation hook for creating a user
const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};
```

## Contributing

To add new API endpoints:

1. Create a new file in the appropriate directory (e.g., `src/products/index.ts`)
2. Import the necessary DTOs from `@genii/dto`
3. Implement your API functions using the `apiRequest` utility
4. Export your functions
5. Update the main index.ts file to export your new functions

## License

MIT
