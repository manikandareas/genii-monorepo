import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema",
  out: "./src/migrations",
  dialect: "postgresql",
} as Config;
