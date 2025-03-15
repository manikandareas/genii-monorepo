// Export core utilities
export * from "./core/fetch";
// Re-export better-fetch with explicit naming to avoid conflicts
export { betterFetch, apiRequest } from "./core/better-fetch";

// Export API clients
export * from "./users";

// Export other modules as they are implemented
// export * from "./auth";
// export * from "./courses";
// export * from "./notes";
// export * from "./bookmarks";
