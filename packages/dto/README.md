# @genii/dto

A package containing Data Transfer Objects (DTOs) for the Genii application.

## Overview

This package provides structured DTOs for:
- Request validation
- Response formatting
- Error handling

All DTOs are built using [Zod](https://github.com/colinhacks/zod) for runtime validation and TypeScript type inference.

## Installation

```bash
# Using npm
npm install @genii/dto

# Using yarn
yarn add @genii/dto

# Using pnpm
pnpm add @genii/dto
```

## Usage

### Importing DTOs

```typescript
// Import specific DTOs
import {
  CreateUserRequestSchema,
  UserResponseSchema
} from '@genii/dto';

// Or import from a specific category
import {
  ValidationErrorResponseSchema
} from '@genii/dto';
```

### Using DTOs for Validation

```typescript
import { CreateUserRequestSchema } from '@genii/dto';

// Validate user input
const validateUserInput = (input: unknown) => {
  const result = CreateUserRequestSchema.safeParse(input);

  if (!result.success) {
    // Handle validation errors
    console.error(result.error);
    return { success: false, errors: result.error.format() };
  }

  // Input is valid, use the parsed data
  return { success: true, data: result.data };
};
```

### Using DTOs for Type Safety

```typescript
import { UserResponse, CreateUserRequest } from '@genii/dto';

// Function with type-safe parameters and return value
const createUser = async (userData: CreateUserRequest): Promise<UserResponse> => {
  // Implementation...
};
```

## Available DTOs

### User DTOs

#### Request DTOs
- `CreateUserRequestSchema` - For creating new users
- `UpdateUserRequestSchema` - For updating existing users
- `LoginUserRequestSchema` - For user login
- `GetUsersQuerySchema` - For querying users with pagination

#### Response DTOs
- `UserResponseSchema` - User data response
- `PaginatedUsersResponseSchema` - Paginated list of users
- `AuthResponseSchema` - Authentication response with tokens
- `TokenRefreshResponseSchema` - Token refresh response

#### Error DTOs
- `BaseErrorResponseSchema` - Base error response
- `ValidationErrorResponseSchema` - Validation errors (400)
- `NotFoundErrorResponseSchema` - Resource not found errors (404)
- `UnauthorizedErrorResponseSchema` - Authentication errors (401)
- `ForbiddenErrorResponseSchema` - Permission errors (403)
- `ConflictErrorResponseSchema` - Resource conflict errors (409)
- `UnprocessableEntityErrorResponseSchema` - Semantic errors (422)
- `TooManyRequestsErrorResponseSchema` - Rate limit errors (429)
- `InternalServerErrorResponseSchema` - Server errors (500)
- `ServiceUnavailableErrorResponseSchema` - Service unavailable errors (503)
- `GatewayTimeoutErrorResponseSchema` - Gateway timeout errors (504)

## Contributing

To add new DTOs:

1. Create a new file in the appropriate directory:
   - `src/{entity}/request/` for request DTOs
   - `src/{entity}/success/` for success response DTOs
   - `src/{entity}/error/` for error DTOs

2. Define your schemas using Zod

3. Export your schemas and types

4. Update the main index.ts file to export your new DTOs

## License

MIT
