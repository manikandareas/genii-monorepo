import { Achievement, CourseCatalog, EnrolledCourse, Notification } from "@genii/dto";

// Enrolled Courses data
export const enrolledCourses: EnrolledCourse[] = [
  {
    id: "enrollment_789",
    courseId: "course_123",
    userId: "user_456",
    course: {
      title: "Advanced React Development",
      id: "course_123",
      description: "Learn to build scalable and performant React applications",
      difficulty: "ADVANCED",
      trailer: null,
      thumbnail:
        "/api/og?title=Advanced React Development&subtitle=Learn to build scalable and performant React applications",
      category_id: "web_development",
      additional_info: {},
      is_published: true,
      total_enrollments: 1000,
      rating: 4.5 as any,
      is_premium: true,
      updated_at: new Date(),
      created_at: new Date(),
      published_at: new Date(),
      course_category: {
        id: "web_development",
        name: "Web Development",
      },
    },
    progress: {
      overallProgress: 45,
      lastAccessedUnit: {
        id: "unit_789",
        title: "React Hooks Deep Dive",
        moduleId: "module_456",
      },
    },
  },
  {
    id: "enrollment_790",
    courseId: "course_124",
    userId: "user_456",
    course: {
      title: "TypeScript Fundamentals",
      id: "course_124",
      description: "Learn the fundamentals of TypeScript",
      difficulty: "BEGINNER",
      trailer: null,
      thumbnail:
        "/api/og?title=TypeScript Fundamentals&subtitle=Learn the fundamentals of TypeScript",
      category_id: "web_development",
      additional_info: {},
      is_published: true,
      total_enrollments: 1000,
      rating: 4.5 as any,
      is_premium: true,
      updated_at: new Date(),
      created_at: new Date(),
      published_at: new Date(),
      course_category: {
        id: "web_development",
        name: "Web Development",
      },
    },
    progress: {
      overallProgress: 75,
      lastAccessedUnit: {
        id: "unit_790",
        title: "Advanced Types",
        moduleId: "module_457",
      },
    },
  },
];

// Achievements data
export const achievements: Achievement = {
  badges: [
    {
      id: "badge_123",
      title: "React Master",
      description: "Completed Advanced React course",
      image_url: "/badges/fc1.png",
      module_id: "module_456",
    },
    {
      id: "badge_124",
      title: "TypeScript Ninja",
      description: "Completed TypeScript course",
      image_url: "/badges/fc2.png",
      module_id: "module_457",
    },
  ],
  certificates: [
    {
      id: "certificate_123",
      title: "React Master",
      description: "Completed Advanced React course",
      image_url: "/badges/fc3.png",
      course_id: "course_123",
    },
  ],
};

// Recommended Courses data
export const courseCatalog: CourseCatalog[] = [
  {
    id: "course_1",
    title: "Advanced TypeScript Development",
    category: "Programming",
    shortDescription:
      "Master TypeScript with advanced concepts, design patterns and real-world applications",
    thumbnail:
      "/api/og?title=Advanced TypeScript Development&subtitle=Master TypeScript with advanced concepts, design patterns and real-world applications",
    stats: {
      rating: 4.8,
      studentsEnrolled: 1250,
      totalReviews: 350,
    },
    is_premium: false,
    duration: "12 hours",
    difficultyLevel: "Advanced",
  },
  {
    id: "course_2",
    title: "Full Stack Next.js 14",
    category: "Web Development",
    shortDescription:
      "Build modern web applications with Next.js 14, React Server Components and TypeScript",
    thumbnail:
      "/api/og?title=Full Stack Next.js 14&subtitle=Build modern web applications with Next.js 14, React Server Components and TypeScript",
    stats: {
      rating: 4.9,
      studentsEnrolled: 2100,
      totalReviews: 450,
    },
    is_premium: false,
    duration: "15 hours",
    difficultyLevel: "Intermediate",
  },
  {
    id: "course_3",
    title: "AI Application Development",
    category: "Artificial Intelligence",
    shortDescription: "Learn to build AI-powered applications using modern frameworks and APIs",
    thumbnail:
      "/api/og?title=AI Application Development&subtitle=Learn to build AI-powered applications using modern frameworks and APIs",
    stats: {
      rating: 4.7,
      studentsEnrolled: 1800,
      totalReviews: 300,
    },
    is_premium: true,
    duration: "18 hours",
    difficultyLevel: "Advanced",
  },
  {
    id: "course_4",
    title: "Cloud Architecture on AWS",
    category: "Cloud Computing",
    shortDescription: "Design and implement scalable cloud solutions using AWS services",
    thumbnail:
      "/api/og?title=Cloud Architecture on AWS&subtitle=Design and implement scalable cloud solutions using AWS services",
    stats: {
      rating: 4.6,
      studentsEnrolled: 950,
      totalReviews: 150,
    },
    is_premium: true,
    duration: "20 hours",
    difficultyLevel: "Intermediate",
  },
];

// Notifications data
export const notifications: Notification = {
  notifications: [
    {
      id: "notif_123",
      title: "New Course Available",
      created_at: new Date(),
      message: "Check out the new course on React Hooks",
      content:
        "React Hooks are a powerful feature of React that allows you to use state and other React features in functional components.",
      is_read: false,
      user_id: "user_456",
    },
    {
      id: "notif_124",
      title: "New Course Available",
      created_at: new Date(),
      message: "Check out the new course on React Hooks",
      content:
        "React Hooks are a powerful feature of React that allows you to use state and other React features in functional components.",
      is_read: false,
      user_id: "user_456",
    },
  ],
  preferences: {
    email: true,
    push: true,
    types: {
      course_updates: true,
      learning_reminders: true,
    },
  },
};

// Streak data
export const streakData: StreakData = {
  current: 5,
  target: 14,
  bestStreak: 12,
  completedDays: [0, 1, 2, 4, 6], // Days of the week (0 = Sunday, 6 = Saturday)
  lastCompleted: "2023-12-05T18:25:43Z",
};
