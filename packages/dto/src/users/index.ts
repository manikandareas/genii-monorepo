/**
 * Export all users DTOs
 */

// Request DTOs
export * from "./request";

// Success DTOs
export * from "./success";

export type UserCourseProgress = {
  overall: {
    completed: number;
    total: number;
    percentage: number;
  };
  byModule: [
    {
      moduleId: string;
      completed: number;
      total: number;
      percentage: number;
    },
  ];
  assessments: {
    completed: number;
    total: number;
    averageScore: number;
  };
};
