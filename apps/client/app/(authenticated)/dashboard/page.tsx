// Import components
import { AchievementsSection } from "./components/achievements-section";
import { CourseCatalog } from "./components/course-catalog";
import { EnrolledCourses } from "./components/enrolled-courses";
import { PromoSection } from "./components/promo-section";
import { StreaksSection } from "./components/streaks-section";

// Import mock data
import { achievements, courseCatalog, enrolledCourses, streakData } from "./mockData";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Continue your learning journey.</p>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2 space-y-6">
          <EnrolledCourses courses={enrolledCourses} />
          <CourseCatalog courses={courseCatalog} />
        </div>

        <div className="lg:col-span-1 space-y-6   ">
          <StreaksSection streakData={streakData} />
          <AchievementsSection achievements={achievements} />
          <PromoSection />
        </div>
      </div>
    </div>
  );
}
