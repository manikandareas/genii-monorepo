declare module "better-fetch" {
  import { z } from "zod";

  type FetchOptions<T> = {
    body?: any;
    headers?: Record<string, string>;
    schema?: z.ZodType<T>;
    // Add other properties as needed
  };

  type ErrorHandler = {
    status: number | "default";
    schema: z.ZodType<any>;
    handler: (error: any) => void;
  };

  type BetterFetchConfig = {
    baseUrl?: string;
    headers?: Record<string, string>;
    defaultErrorHandlers?: ErrorHandler[];
    // Add other config properties as needed
  };

  type FetchResponse<T> = {
    data: T;
    status: number;
    headers: Headers;
    // Add other properties as needed
  };

  type BetterFetchInstance = {
    get: <T>(url: string, options?: FetchOptions<T>) => Promise<FetchResponse<T>>;
    post: <T>(url: string, options?: FetchOptions<T>) => Promise<FetchResponse<T>>;
    put: <T>(url: string, options?: FetchOptions<T>) => Promise<FetchResponse<T>>;
    patch: <T>(url: string, options?: FetchOptions<T>) => Promise<FetchResponse<T>>;
    delete: <T>(url: string, options?: FetchOptions<T>) => Promise<FetchResponse<T>>;
  };

  export function createFetch(config?: BetterFetchConfig): BetterFetchInstance;
}
