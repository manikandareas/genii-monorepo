# Genii API Bruno Collection

This collection contains API requests for testing the Genii platform.

## Prerequisites

- [Bruno](https://www.usebruno.com/) installed on your machine
- Genii API running locally at http://localhost:3000/api

## Getting Started

1. Open Bruno app
2. Click "Open Collection"
3. Navigate to this directory
4. Select the `bruno.json` file

## Authentication Endpoints

### Register

Creates a new user account.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/register
- Body:
  ```json
  {
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "username": "testuser"
  }
  ```

**Response:**
```json
{
  "message": "Registration successful. Please check your email to verify your account."
}
```

### Login

Logs in a user and returns access and refresh tokens.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/login
- Body:
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 900,
  "user": {
    "id": "user-id",
    "name": "Test User",
    "email": "test@example.com",
    "username": "testuser",
    "emailVerified": true,
    "image": null,
    "isAdmin": false,
    "isAlreadyOnboard": false,
    "createdAt": "2023-07-27T12:00:00.000Z",
    "updatedAt": "2023-07-27T12:00:00.000Z"
  }
}
```

### Get Profile

Returns the profile of the authenticated user.

**Request:**
- Method: GET
- URL: {{baseUrl}}/auth/me
- Headers:
  - Authorization: Bearer {{accessToken}}

**Response:**
```json
{
  "id": "user-id",
  "name": "Test User",
  "email": "test@example.com",
  "username": "testuser",
  "emailVerified": true,
  "image": null,
  "isAdmin": false,
  "isAlreadyOnboard": false,
  "createdAt": "2023-07-27T12:00:00.000Z",
  "updatedAt": "2023-07-27T12:00:00.000Z"
}
```

### Refresh Token

Refreshes the access token using a refresh token.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/refresh-token
- Body:
  ```json
  {
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 900
}
```

### Verify Email

Verifies a user's email using the token sent to their email address.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/verify-email
- Body:
  ```json
  {
    "token": "verification-token-from-email"
  }
  ```

**Response:**
```json
{
  "message": "Email verified successfully"
}
```

### Resend Verification Email

Resends the verification email to the user.

**Request:**
- Method: POST
- URL: {{baseUrl}}/auth/resend-verification
- Body:
  ```json
  {
    "email": "test@example.com"
  }
  ```

**Response:**
```json
{
  "message": "Verification email resent successfully"
}
```

### OAuth Authentication

The API supports OAuth authentication with GitHub and Google.

#### GitHub OAuth

1. **Initiate GitHub OAuth flow**:
   - GET {{baseUrl}}/auth/github
   - Redirects to GitHub authorization page

2. **GitHub OAuth callback**:
   - GET {{baseUrl}}/auth/github/callback
   - Handles the callback from GitHub and redirects to the client with tokens

#### Google OAuth

1. **Initiate Google OAuth flow**:
   - GET {{baseUrl}}/auth/google
   - Redirects to Google authorization page

2. **Google OAuth callback**:
   - GET {{baseUrl}}/auth/google/callback
   - Handles the callback from Google and redirects to the client with tokens

## Running Tests

You can run the entire authentication flow by running the "Auth Flow" collection in Bruno.

When running the collection, Bruno will:
1. Register a new user
2. Login with the user credentials
3. Get the user's profile using the authentication token
4. Refresh the access token
5. Test email verification
6. Test resending verification email

## Environment Variables

The collection uses the following environment variables:

- `baseUrl`: The base URL of the API (default: http://localhost:3000/api)
- `accessToken`: The JWT access token obtained from login (automatically set during tests)
- `refreshToken`: The JWT refresh token obtained from login (automatically set during tests)
