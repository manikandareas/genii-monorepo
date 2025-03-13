/**
 * Server environment variables
 */
export const serverEnvs = {
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL: process.env.DATABASE_URL,
  SERVERLESS_DRIVER: process.env.SERVERLESS_DRIVER === "true",
};
