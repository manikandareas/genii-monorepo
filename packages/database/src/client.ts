import { PrismaClient } from "@prisma/client";
import { serverEnvs } from "./env";

/**
 * Create a database client with the provided connection string
 * Supports both serverless and regular connections
 * @param connectionString - The Neon database connection string
 * @returns A Prisma Client instance
 */
export function createClient(connectionString: string | undefined) {
  if (!connectionString) {
    throw new Error("Database connection string is required");
  }

  return new PrismaClient({
    datasources: {
      db: {
        url: connectionString,
      },
    },
    log: serverEnvs.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}

// Global client for development to prevent connection churn during hot reloading
declare global {
  // eslint-disable-next-line no-var
  var globalDb: PrismaClient | undefined;
}

/**
 * Get a database client instance
 * Uses a global singleton in development to prevent connection churn
 * @param connectionString - The Neon database connection string
 * @returns A Prisma Client instance
 */
export function getClient(connectionString: string) {
  // In production, always create a new client
  if (serverEnvs.NODE_ENV === "production") {
    return createClient(connectionString);
  }

  // In development, use a global singleton
  if (!global.globalDb) {
    global.globalDb = createClient(connectionString);
  }

  return global.globalDb;
}

export type DB = PrismaClient;
