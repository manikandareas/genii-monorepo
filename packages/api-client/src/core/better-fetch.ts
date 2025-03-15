import { createFetch } from "better-fetch";
import { z } from "zod";
import {
  BaseErrorResponseSchema,
  ValidationErrorResponseSchema,
  UnauthorizedErrorResponseSchema,
  ForbiddenErrorResponseSchema,
  NotFoundErrorResponseSchema,
  ConflictErrorResponseSchema,
  TooManyRequestsErrorResponseSchema,
  InternalServerErrorResponseSchema,
  ServiceUnavailableErrorResponseSchema,
  GatewayTimeoutErrorResponseSchema,
  UnprocessableEntityErrorResponseSchema,
} from "@genii/dto";

/**
 * Base API URL for the backend
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Type for validation issue
 */
type ValidationIssue = {
  field?: string;
  code: string;
  message: string;
};

/**
 * Configuration for the better-fetch instance
 */
export const betterFetch = createFetch({
  baseUrl: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  defaultErrorHandlers: [
    {
      status: 400,
      schema: ValidationErrorResponseSchema,
      handler: (error) => {
        console.error("Validation error:", error);
        const message = error.validationErrors
          ? Object.entries(error.validationErrors)
              .map(
                ([field, errors]) =>
                  `${field}: ${Array.isArray(errors) ? errors.join(", ") : String(errors)}`
              )
              .join("; ")
          : error.message;

        throw new Error(`Validation failed: ${message}`);
      },
    },
    {
      status: 401,
      schema: UnauthorizedErrorResponseSchema,
      handler: (error) => {
        console.error("Authentication error:", error);
        // Redirect to login or clear tokens if needed
        throw new Error("Authentication required");
      },
    },
    {
      status: 403,
      schema: ForbiddenErrorResponseSchema,
      handler: (error) => {
        console.error("Permission error:", error);
        throw new Error("You do not have permission to perform this action");
      },
    },
    {
      status: 404,
      schema: NotFoundErrorResponseSchema,
      handler: (error) => {
        console.error("Not found error:", error);
        throw new Error(`Resource not found: ${error.message}`);
      },
    },
    {
      status: 409,
      schema: ConflictErrorResponseSchema,
      handler: (error) => {
        console.error("Conflict error:", error);
        throw new Error(`Conflict: ${error.message}`);
      },
    },
    {
      status: 422,
      schema: UnprocessableEntityErrorResponseSchema,
      handler: (error) => {
        console.error("Unprocessable entity error:", error);
        const message = error.issues
          ? error.issues
              .map(
                (issue: ValidationIssue) =>
                  `${issue.field ? `${issue.field}: ` : ""}${issue.message}`
              )
              .join("; ")
          : error.message;
        throw new Error(`Unprocessable entity: ${message}`);
      },
    },
    {
      status: 429,
      schema: TooManyRequestsErrorResponseSchema,
      handler: (error) => {
        const retryAfter = error.retryAfter
          ? ` Please try again in ${error.retryAfter} seconds.`
          : "";
        console.error("Rate limit error:", error);
        throw new Error(`Too many requests.${retryAfter}`);
      },
    },
    {
      status: 500,
      schema: InternalServerErrorResponseSchema,
      handler: (error) => {
        const traceInfo = error.traceId ? ` (Trace ID: ${error.traceId})` : "";
        console.error(`Server error${traceInfo}:`, error);
        throw new Error(`An unexpected server error occurred. ${traceInfo}`);
      },
    },
    {
      status: 503,
      schema: ServiceUnavailableErrorResponseSchema,
      handler: (error) => {
        const retryAfter = error.retryAfter
          ? ` Please try again in ${error.retryAfter} seconds.`
          : "";
        console.error("Service unavailable:", error);
        throw new Error(`The service is currently unavailable.${retryAfter}`);
      },
    },
    {
      status: 504,
      schema: GatewayTimeoutErrorResponseSchema,
      handler: (error) => {
        console.error("Gateway timeout:", error);
        throw new Error("The request timed out. Please try again later.");
      },
    },
    {
      status: "default",
      schema: BaseErrorResponseSchema,
      handler: (error) => {
        console.error("API error:", error);
        throw new Error(error.message || "An unexpected error occurred");
      },
    },
  ],
});

/**
 * Type for query parameters
 */
type QueryParams = Record<string, string | number | boolean | undefined | null>;

/**
 * Custom generic API request function using better-fetch and Zod schemas
 *
 * @param endpoint - API endpoint
 * @param method - HTTP method
 * @param requestSchema - Zod schema for request validation
 * @param responseSchema - Zod schema for response validation
 * @param data - Request body data
 * @param queryParams - Query parameters
 * @param headers - Custom headers
 * @returns Validated response data
 */
export async function apiRequest<TRequest, TResponse>({
  endpoint,
  method,
  requestSchema,
  responseSchema,
  data,
  queryParams,
  headers,
}: {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  requestSchema?: z.ZodType<TRequest>;
  responseSchema: z.ZodType<TResponse>;
  data?: TRequest;
  queryParams?: QueryParams;
  headers?: Record<string, string>;
}): Promise<TResponse> {
  // Validate request data if schema is provided
  if (requestSchema && data) {
    const result = requestSchema.safeParse(data);
    if (!result.success) {
      console.error("Request validation failed:", result.error);
      throw new Error(`Invalid request data: ${result.error.message}`);
    }
  }

  // Prepare URL with query parameters
  let url = endpoint;
  if (queryParams && Object.keys(queryParams).length > 0) {
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
    url = `${endpoint}?${params.toString()}`;
  }

  // Make the request
  try {
    const response = await betterFetch[
      method.toLowerCase() as "get" | "post" | "put" | "patch" | "delete"
    ]<TResponse>(url, {
      body: data && method !== "GET" ? data : undefined,
      headers,
      schema: responseSchema,
    });

    return response.data;
  } catch (error) {
    console.error(`API request failed for ${method} ${endpoint}:`, error);
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }
    throw new Error("API request failed for an unknown reason");
  }
}
