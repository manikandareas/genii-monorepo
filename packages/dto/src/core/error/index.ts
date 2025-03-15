import { z } from "zod";

/**
 * Base error response schema
 */
export const BaseErrorResponseSchema = z.object({
  statusCode: z.number(),
  message: z.string().or(z.array(z.string())),
  error: z.string().optional(),
});

export type BaseErrorResponse = z.infer<typeof BaseErrorResponseSchema>;

/**
 * Validation error response schema
 */
export const ValidationErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(400),
  error: z.literal("Bad Request"),
  validationErrors: z.record(z.array(z.string())).optional(),
});

export type ValidationErrorResponse = z.infer<typeof ValidationErrorResponseSchema>;

/**
 * Not found error response schema
 */
export const NotFoundErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(404),
  error: z.literal("Not Found"),
});

export type NotFoundErrorResponse = z.infer<typeof NotFoundErrorResponseSchema>;

/**
 * Unauthorized error response schema
 */
export const UnauthorizedErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(401),
  error: z.literal("Unauthorized"),
});

export type UnauthorizedErrorResponse = z.infer<typeof UnauthorizedErrorResponseSchema>;

/**
 * Forbidden error response schema
 */
export const ForbiddenErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(403),
  error: z.literal("Forbidden"),
});

export type ForbiddenErrorResponse = z.infer<typeof ForbiddenErrorResponseSchema>;

/**
 * Conflict error response schema
 */
export const ConflictErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(409),
  error: z.literal("Conflict"),
});

export type ConflictErrorResponse = z.infer<typeof ConflictErrorResponseSchema>;

/**
 * Too Many Requests error response schema
 */
export const TooManyRequestsErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(429),
  error: z.literal("Too Many Requests"),
  retryAfter: z.number().optional(),
});

export type TooManyRequestsErrorResponse = z.infer<typeof TooManyRequestsErrorResponseSchema>;

/**
 * Internal Server Error response schema
 */
export const InternalServerErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(500),
  error: z.literal("Internal Server Error"),
  traceId: z.string().optional(),
});

export type InternalServerErrorResponse = z.infer<typeof InternalServerErrorResponseSchema>;

/**
 * Service Unavailable error response schema
 */
export const ServiceUnavailableErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(503),
  error: z.literal("Service Unavailable"),
  retryAfter: z.number().optional(),
});

export type ServiceUnavailableErrorResponse = z.infer<typeof ServiceUnavailableErrorResponseSchema>;

/**
 * Gateway Timeout error response schema
 */
export const GatewayTimeoutErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(504),
  error: z.literal("Gateway Timeout"),
});

export type GatewayTimeoutErrorResponse = z.infer<typeof GatewayTimeoutErrorResponseSchema>;

/**
 * Unprocessable Entity error response schema
 */
export const UnprocessableEntityErrorResponseSchema = BaseErrorResponseSchema.extend({
  statusCode: z.literal(422),
  error: z.literal("Unprocessable Entity"),
  issues: z
    .array(
      z.object({
        field: z.string().optional(),
        code: z.string(),
        message: z.string(),
      })
    )
    .optional(),
});

export type UnprocessableEntityErrorResponse = z.infer<
  typeof UnprocessableEntityErrorResponseSchema
>;
