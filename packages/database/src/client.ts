import { drizzle as neonDrizzle } from "drizzle-orm/neon-serverless";
import { drizzle } from "drizzle-orm/postgres-js";
import { neon, neonConfig, Pool } from "@neondatabase/serverless";
import * as schema from "./schema";
import postgres from "postgres";
import { serverEnvs } from "./env";

// For serverless environments that use WebSockets
try {
  // Dynamic import for ws to avoid issues in browser environments
  const ws = require("ws");
  neonConfig.webSocketConstructor = ws;
} catch (error) {
  // ws might not be available in all environments
}

/**
 * Create a database client with the provided connection string
 * Supports both serverless and regular connections
 * @param connectionString - The Neon database connection string
 * @returns A Drizzle ORM client instance
 */
export function createClient(connectionString: string | undefined) {
  if (!connectionString) {
    throw new Error("Database connection string is required");
  }

  const client = () => {
    if (serverEnvs.SERVERLESS_DRIVER) {
      // Use connection pooling for serverless environments
      const pool = new Pool({ connectionString });
      return neonDrizzle(pool, { schema });
    }

    // Use regular postgres client with transaction support
    return drizzle(postgres(connectionString), {
      schema,
    });
  };

  return client();
}

// Global client for development to prevent connection churn during hot reloading
declare global {
  // eslint-disable-next-line no-var
  var globalDb: ReturnType<typeof createClient> | undefined;
}

/**
 * Get a database client instance
 * Uses a global singleton in development to prevent connection churn
 * @param connectionString - The Neon database connection string
 * @returns A Drizzle ORM client instance
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
