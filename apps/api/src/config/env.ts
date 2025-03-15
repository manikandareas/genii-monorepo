export const env = {
  // App Configuration
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",

  // App URLs
  APP_BASE_URL: process.env.APP_BASE_URL || "http://localhost:8000",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  ADMIN_URL: process.env.ADMIN_URL || "http://localhost:4000",

  // Clerk
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET || "",

  // Email
  EMAIL_FROM: process.env.EMAIL_FROM || "GeniiEdu <no-reply@geniiedu.site>",
  RESEND_API_KEY: process.env.RESEND_API_KEY || "",

  // Storage
  R2_BUCKET_ENDPOINT: process.env.R2_BUCKET_ENDPOINT || "",
  R2_BUCKET_ACCESS_KEY_ID: process.env.R2_BUCKET_ACCESS_KEY_ID || "",
  R2_BUCKET_SECRET_ACCESS_KEY: process.env.R2_BUCKET_SECRET_ACCESS_KEY || "",
  R2_BUCKET_NAME: process.env.R2_BUCKET_NAME || "",

  // AI Models
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  OPENAI_BASE_URL: process.env.OPENAI_BASE_URL || "https://api.groq.com/openai/v1",
} as const;
