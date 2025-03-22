import { Course, CourseCategory, Feedback, Module, Unit } from "@genii/database/src/types";

export type EnrolledCourse = {
  id: string;
  courseId: string;
  userId: string;
  progress: {
    overallProgress: number;
    lastAccessedUnit: {
      id: string;
      title: string;
      moduleId: string;
    };
  };
  course: Course & {
    course_category: CourseCategory;
  };
};

export type CourseCatalog = {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  stats: {
    rating: number;
    studentsEnrolled: number;
    totalReviews: number;
  };
  category: string;
  difficultyLevel: string;
  duration: string;
  is_premium: boolean;
};

export type CourseOverview = Course & {
  metadata: {
    level: "INTERMEDIATE";
    duration: "12 weeks";
    effort: "10 hours/week";
    language: "English";
    updatedAt: "2024-03-01";
  };
  stats: {
    enrolled: 1500;
    completed: number;
    averageRating: number;
    reviewCount: number;
  };
  modules: (Module & { units: Unit[] })[];
  reviews: Feedback[];
};
