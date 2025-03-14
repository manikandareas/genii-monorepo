# Genii API Bruno Collection

This collection contains API requests for testing the Genii platform.

## Prerequisites

- [Bruno](https://www.usebruno.com/) installed on your machine
- Genii API running locally at http://localhost:3001

## Getting Started

1. Open Bruno app
2. Click "Open Collection"
3. Navigate to this directory
4. Select the `bruno.json` file

## Authentication Endpoints

### Register

Creates a new user account and returns a JWT token.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/register
- Body:
  ```json
  {
    "name": "Test User",
    "email": "test@example.com",
    "password": "Password123"
  }
  ```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user-id",
    "name": "Test User",
    "email": "test@example.com"
  },
  "token": "jwt-token"
}
```

### Login

Logs in a user and returns a JWT token.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/login
- Body:
  ```json
  {
    "email": "test@example.com",
    "password": "Password123"
  }
  ```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "user-id",
    "name": "Test User",
    "email": "test@example.com",
    "username": null,
    "is_admin": false,
    "is_already_onboard": false,
    "image": null
  },
  "token": "jwt-token"
}
```

### Get Profile

Returns the profile of the authenticated user.

**Request:**
- Method: GET
- URL: {{baseUrl}}/auth/profile
- Headers:
  - Authorization: Bearer {{authToken}}

**Response:**
```json
{
  "id": "user-id",
  "name": "Test User",
  "email": "test@example.com",
  "username": null,
  "is_admin": false,
  "is_already_onboard": false,
  "image": null
}
```

## Running Tests

You can run the entire authentication flow by running the "Authentication Flow" collection in Bruno.

When running the collection, Bruno will:
1. Test unauthorized access to the profile endpoint
2. Register a new user
3. Login with the user credentials
4. Get the user's profile using the authentication token

## Environment Variables

The collection uses the following environment variables:

- `baseUrl`: The base URL of the API (default: http://localhost:3001)
- `authToken`: The JWT token obtained from login or register (automatically set during tests)
