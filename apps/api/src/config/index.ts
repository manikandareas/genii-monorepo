import { env } from "./env";

export const config = () =>
  ({
    // App Configuration
    port: env.PORT,
    nodeEnv: env.NODE_ENV,
    appBaseUrl: env.APP_BASE_URL,
    clientUrl: env.CLIENT_URL,
    adminUrl: env.ADMIN_URL,

    // Auth Configuration

    clerk: {
      webhookSecret: process.env.WEBHOOK_SECRET,
      secretKey: process.env.CLERK_SECRET_KEY,
    },

    // Email Configuration
    email: {
      from: env.EMAIL_FROM,
      resendApiKey: env.RESEND_API_KEY,
    },

    // Storage Configuration
    storage: {
      r2: {
        bucketEndpoint: env.R2_BUCKET_ENDPOINT,
        accessKeyId: env.R2_BUCKET_ACCESS_KEY_ID,
        secretAccessKey: env.R2_BUCKET_SECRET_ACCESS_KEY,
        bucketName: env.R2_BUCKET_NAME,
      },
    },

    // AI Models Configuration
    ai: {
      openai: {
        apiKey: env.OPENAI_API_KEY,
        baseUrl: env.OPENAI_BASE_URL,
      },
    },
  }) as const;
