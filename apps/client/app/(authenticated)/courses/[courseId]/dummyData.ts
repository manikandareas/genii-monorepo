import { CourseOverview } from "@genii/dto";

export const courseData: CourseOverview = {
  id: "advanced-3d-modelling",
  title: "Advanced 3D Modelling in Blender",
  thumbnail: "/images/blender-thumbnail.jpg", // Update with actual thumbnail
  trailer: "https://www.youtube.com/embed/StSXljcLGdI?si=vXqIZWx8ABTUe1H8", // Update with actual trailer if available
  is_premium: false,
  category_id: "3d-modelling",
  description:
    "Embark on a creative journey and master the art of crafting your unique 3D character using Blender. Dive into the fascinating process of bringing your imaginative ideas to life as you explore the intricate features of Blender.\n\nUnleash your creativity as you learn to meticulously model, enhance details, and skillfully manipulate light and color. With each step, you'll unveil the captivating characters residing in your mind and unleash them upon the world, all while enjoying an exhilarating and enjoyable experience.",
  difficulty: "INTERMEDIATE",
  additional_info: [
    {
      title: "Prerequisites",
      description:
        "Familiarity with Blender's user interface and navigation, basic manipulation of SOPs (Surface Operators), and understanding of fundamental mathematical concepts related to vectors are recommended.",
    },
    {
      title: "Materials",
      description:
        "Blender 2.93 (or higher) | Recommended system requirements: 8-core processor and 32GB of RAM. To participate in this workshop, you can download the free educational edition of Blender.",
    },
    {
      title: "What you'll learn",
      description:
        "Learn to create a unique 3D character from scratch using Blender. Master the art of 3D modelling and animation with this comprehensive course.",
    },
  ],
  created_at: new Date(),
  updated_at: new Date(),
  is_published: true,
  total_enrollments: 1000,
  rating: 4.5 as any,
  published_at: new Date(),
  metadata: {
    level: "INTERMEDIATE",
    duration: "12 weeks",
    effort: "10 hours/week",
    language: "English",
    updatedAt: "2024-03-01",
  },
  stats: {
    averageRating: 4.5,
    enrolled: 1500,
    completed: 500,
    reviewCount: 100,
  },
  modules: [
    {
      id: "module_1",
      title: "Introduction to Blender",
      description: "Learn the basics of Blender and its interface",
      created_at: new Date(),
      updated_at: new Date(),
      is_personalizable: true,
      order_index: 1,
      course_id: "advanced-3d-modelling",
      units: [
        {
          id: "unit_1",
          module_id: "module_1",
          title: "Introduction to Blender",
          order_index: 1,
          type: "VIDEO",
        },
        {
          id: "unit_2",
          module_id: "module_1",
          title: "Blender Interface",
          order_index: 2,
          type: "VIDEO",
        },
        {
          id: "unit_3",
          module_id: "module_1",
          title: "Creating a 3D Character",
          order_index: 3,
          type: "VIDEO",
        },
      ],
    },
    {
      id: "module_2",
      title: "3D Character Animation",
      description: "Learn how to animate a 3D character",
      created_at: new Date(),
      updated_at: new Date(),
      is_personalizable: true,
      order_index: 2,
      course_id: "advanced-3d-modelling",
      units: [
        {
          id: "unit_4",
          module_id: "module_2",
          title: "Creating a 3D Character",
          order_index: 1,
          type: "VIDEO",
        },
        {
          id: "unit_5",
          module_id: "module_2",
          title: "Animating a 3D Character",
          order_index: 2,
          type: "VIDEO",
        },
      ],
    },
    {
      id: "module_3",
      title: "Rendering and Lighting",
      description: "Learn how to render and light a 3D character",
      created_at: new Date(),
      updated_at: new Date(),
      is_personalizable: true,
      order_index: 3,
      course_id: "advanced-3d-modelling",
      units: [
        {
          id: "unit_6",
          module_id: "module_3",
          title: "Rendering a 3D Character",
          order_index: 1,
          type: "VIDEO",
        },
        {
          id: "unit_7",
          module_id: "module_3",
          title: "Lighting a 3D Character",
          order_index: 2,
          type: "VIDEO",
        },
      ],
    },
  ],
  reviews: [
    {
      id: "review_1",
      rating: 5 as any,
      created_at: new Date(),
      updated_at: new Date(),
      course_id: "advanced-3d-modelling",
      comments: "This course is amazing!",
      user_id: "user_1",
    },
    {
      id: "review_2",
      rating: 4 as any,
      created_at: new Date(),
      updated_at: new Date(),
      course_id: "advanced-3d-modelling",
      comments: "This course is good!",
      user_id: "user_2",
    },
    {
      id: "review_3",
      rating: 3 as any,
      created_at: new Date(),
      updated_at: new Date(),
      course_id: "advanced-3d-modelling",
      comments: "This course is average!",
      user_id: "user_3",
    },
  ],
};
