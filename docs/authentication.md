# Authentication Setup

This document outlines the authentication setup for the Genii platform, which uses a combination of NestJS with Passport.js for the backend and NextAuth.js for the frontend.

## Backend Authentication (NestJS + Passport.js)

The backend uses a JWT-based authentication strategy with Passport.js.

### Key Components

1. **JWT Strategy**: Validates JWT tokens from the Authorization header
2. **Local Strategy**: Validates username/password credentials
3. **Auth Guards**: Protect routes that require authentication
4. **Auth Service**: Handles user registration, login, and token generation

### API Endpoints

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login with email and password
- `GET /auth/profile`: Get the current user's profile (protected)

### Database Schema

The authentication system uses the following tables:

- `user`: Stores user information
- `account`: Stores authentication-related data, including passwords
- `session`: Stores active sessions

## Frontend Authentication (NextAuth.js)

The frontend uses NextAuth.js for authentication and session management.

### Key Components

1. **NextAuth Configuration**: Set up in `app/api/auth/[...nextauth]/route.ts`
2. **Middleware**: Protects routes and handles redirects based on authentication status
3. **Auth Hook**: Custom `useAuth` hook for easy authentication in components
4. **Providers**: Wraps the application to provide session context

### Protected Routes

The following routes are protected by the middleware:

- `/courses/*`: Course-related pages
- `/profile/*`: User profile pages
- `/admin/*`: Admin-only pages
- `/notes/*`: User notes
- `/bookmarks/*`: User bookmarks
- `/onboarding/*`: Onboarding process

### Environment Variables

#### Backend (API)

```
JWT_SECRET=your-jwt-secret-key-change-in-production
JWT_EXPIRES_IN=1d
```

#### Frontend (Client)

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-change-in-production
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Authentication Flow

1. User submits login credentials on the frontend
2. NextAuth sends credentials to the backend API
3. Backend validates credentials and returns a JWT token
4. NextAuth stores the token and creates a session
5. Protected routes check for valid session via middleware
6. API requests include the JWT token in the Authorization header

## OAuth Integration (Future)

The current schema supports OAuth providers like Google and GitHub. To add these:

1. Add provider configuration to NextAuth setup
2. Update the account table to store provider tokens
3. Implement the necessary callback handlers

## Security Considerations

- JWT tokens expire after 24 hours
- Passwords are hashed using bcrypt
- Session data is encrypted
- CSRF protection is enabled by default in NextAuth
- Environment variables should be properly secured in production
