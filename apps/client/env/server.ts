import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnvs = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    CLERK_SECRET_KEY: z.string(),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export type ServerEnvs = typeof serverEnvs;
