import { getClient } from "./client";
import { serverEnvs } from "./env";

/**
 * The database client instance
 * Uses environment variables for configuration
 */
const db = getClient(serverEnvs.DATABASE_URL || "");

export default db;
