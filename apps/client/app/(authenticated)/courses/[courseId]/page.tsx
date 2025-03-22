import { CircleDot, LayoutGrid, Lightbulb } from "lucide-react";
import { CourseHero } from "./components/course-hero";
import { CourseInfoCard } from "./components/course-info-card";
import { InfoCard } from "./components/info-card";
import { ModuleAccordion } from "./components/module-accordion";
import { ReviewSection } from "./components/review-section";
import { courseData } from "./dummyData";

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const { courseId } = params;

  return (
    <div className="container mx-auto px-4 py-8 min-h-[110vh] max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Course content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Section */}
          <CourseHero
            title={courseData.title}
            thumbnail={courseData.thumbnail as string}
            trailer={courseData.trailer as string | undefined}
          />

          {/* Course description */}

          <h2 className="text-xl font-bold mb-4">About this course</h2>
          <div className="space-y-4 prose prose-sm max-w-none text-muted-foreground">
            {courseData.description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Table of Contents */}

          <ModuleAccordion items={courseData.modules as any} />

          {/* Reviews Section */}

          <ReviewSection
            reviews={courseData.reviews}
            averageRating={courseData.stats.averageRating}
            totalReviews={courseData.stats.reviewCount}
          />
        </div>

        {/* Right column - Course info and additional details */}
        <div className="lg:col-span-1 space-y-6">
          {/* Course Info Card */}
          <CourseInfoCard
            isPremium={courseData.is_published}
            unitCount={courseData.modules.flatMap((module) => module.units).length}
            difficulty={courseData.difficulty}
            duration={courseData.metadata.duration}
            effort={courseData.metadata.effort}
            studentsEnrolled={courseData.stats.enrolled}
            language={courseData.metadata.language}
            updatedAt={courseData.metadata.updatedAt}
            averageRating={courseData.stats.averageRating}
            reviewCount={courseData.stats.reviewCount}
            completedCount={courseData.stats.completed}
          />

          {/* Additional Info Cards */}
          <div className="space-y-4">
            {courseData.additional_info && Array.isArray(courseData.additional_info) && (
              <>
                {(
                  courseData.additional_info as {
                    title: string;
                    description: string;
                  }[]
                ).map((info, index) => {
                  let variant = "default";
                  let icon = null;

                  // Determine variant and icon based on title
                  if (info.title.toLowerCase().includes("prerequisites")) {
                    variant = "prerequisite";
                    icon = <CircleDot className="h-4 w-4" />;
                  } else if (info.title.toLowerCase().includes("materials")) {
                    variant = "materials";
                    icon = <LayoutGrid className="h-4 w-4" />;
                  } else if (info.title.toLowerCase().includes("what you'll learn")) {
                    variant = "feature";
                    icon = <Lightbulb className="h-4 w-4" />;
                  }

                  return (
                    <InfoCard
                      key={index}
                      title={info.title}
                      description={info.description}
                      variant={variant as "default" | "feature" | "prerequisite" | "materials"}
                      icon={icon}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
