"use client";

import { useState } from "react";
import { CourseNavigation } from "./units/[unitId]/components/course-navigation";
import { PageHeader } from "./units/[unitId]/components/page-header";
import { MobileNavigation } from "./components/mobile-navigation";
import { ModuleProgress } from "./components/module-progress";
import { PersonalizationSection } from "./components/personalization-section";
import { ModuleDescription } from "./components/module-description";
import { ModuleBadges } from "./components/module-badges";
import { ModuleUnits } from "./components/module-units";
import { ModuleNavigation } from "./components/module-navigation";
import { Module } from "./components/types";
import { useRouter } from "next/navigation";

// Mock data
const MOCK_MODULE: Module = {
  id: "module-2",
  title: "Design Principles",
  description:
    "Learn the fundamental principles of design including contrast, balance, color theory, typography, and layout. These principles will form the foundation of your design knowledge and will be applied throughout the course.",
  progress: 75,
  isPersonalized: false,
  canBePersonalized: true,
  badges: [
    {
      id: "badge-1",
      name: "Design Master",
      description: "Completed all design principles modules",
      image: "",
    },
    {
      id: "badge-2",
      name: "Typography Expert",
      description: "Mastered typography concepts",
      image: "",
    },
  ],
  units: [
    { id: "unit-2-1", title: "Contrast and balance", completed: true, active: false },
    { id: "unit-2-2", title: "Color theory basics", completed: true, active: false },
    { id: "unit-2-3", title: "Typography fundamentals", completed: false, active: true },
    { id: "unit-2-4", title: "Layout principles", completed: false, active: false },
  ],
  nextUnit: { id: "unit-2-3", title: "Typography fundamentals" },
  previousModule: { id: "module-1", title: "Introduction to UI Design" },
};

const MOCK_MODULES = [
  {
    id: "module-1",
    title: "Introduction to UI Design",
    progress: 100,
    active: false,
    units: [
      { id: "unit-1-1", title: "Welcome to the course", completed: true, active: false },
      { id: "unit-1-2", title: "What you'll learn", completed: true, active: false },
      { id: "unit-1-3", title: "Tools and resources", completed: true, active: false },
    ],
  },
  {
    id: "module-2",
    title: "Design Principles",
    progress: 75,
    active: true,
    units: [
      { id: "unit-2-1", title: "Contrast and balance", completed: true, active: false },
      { id: "unit-2-2", title: "Color theory basics", completed: true, active: false },
      { id: "unit-2-3", title: "Typography fundamentals", completed: false, active: true },
      { id: "unit-2-4", title: "Layout principles", completed: false, active: false },
    ],
  },
  {
    id: "module-3",
    title: "User Experience",
    progress: 0,
    active: false,
    units: [
      { id: "unit-3-1", title: "User research", completed: false, active: false },
      { id: "unit-3-2", title: "Wireframing", completed: false, active: false },
      { id: "unit-3-3", title: "Prototyping", completed: false, active: false },
      { id: "unit-3-4", title: "User testing", completed: false, active: false },
    ],
  },
];

export default function DetailModulePage() {
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);
  const courseId = "course-1";
  const courseName = "UI/UX Design Fundamentals";
  const currentModuleId = "module-2";
  const overallProgress = 42;
  const [isPersonalized, setIsPersonalized] = useState(true);

  const handlePersonalize = () => {
    // Logic for personalizing the module
    console.log("Personalizing module");
    setIsPersonalized(true);
  };

  const handleTogglePersonalization = () => {
    setIsPersonalized(!isPersonalized);
  };

  const handleUnitClick = (unitId: string) => {
    // Navigate to the unit
    router.push(`/courses/${courseId}/modules/${currentModuleId}/units/${unitId}`);
  };

  const handlePreviousModule = () => {
    if (MOCK_MODULE.previousModule) {
      router.push(`/courses/${courseId}/modules/${MOCK_MODULE.previousModule.id}`);
    }
  };

  const handleNextUnit = () => {
    if (MOCK_MODULE.nextUnit) {
      router.push(
        `/courses/${courseId}/modules/${currentModuleId}/units/${MOCK_MODULE.nextUnit.id}`
      );
    }
  };

  return (
    <div className="container p-4 sm:py-8 mx-auto">
      <div className="flex items-center justify-between">
        <PageHeader
          section="Design Course"
          chapter="2"
          totalChapters={3}
          title={MOCK_MODULE.title}
          courseId={courseId}
        />

        {/* Mobile navigation using the reusable component */}
        <MobileNavigation isOpen={sheetOpen} onOpenChange={setSheetOpen} title="Course navigation">
          <CourseNavigation
            modules={MOCK_MODULES}
            currentModuleId={currentModuleId}
            currentUnitId=""
            courseId={courseId}
            courseName={courseName}
            overallProgress={overallProgress}
            isMobileSheet={true}
            onClose={() => setSheetOpen(false)}
          />
        </MobileNavigation>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 md:gap-6">
        {/* Left sidebar - course navigation (Hidden on mobile, shown on desktop) */}
        <div className="hidden lg:block lg:col-span-2">
          <CourseNavigation
            modules={MOCK_MODULES}
            currentModuleId={currentModuleId}
            currentUnitId=""
            courseId={courseId}
            courseName={courseName}
            overallProgress={overallProgress}
            isMobileSheet={false}
          />
        </div>

        {/* Main content area */}
        <div className="lg:col-span-4">
          <div className="md:p-4">
            {/* Module content sections using our components */}
            <ModuleProgress progress={MOCK_MODULE.progress} />

            <PersonalizationSection
              isPersonalized={isPersonalized}
              canBePersonalized={MOCK_MODULE.canBePersonalized}
              onPersonalize={handlePersonalize}
              onTogglePersonalization={handleTogglePersonalization}
            />

            <ModuleDescription description={MOCK_MODULE.description} />

            <ModuleBadges badges={MOCK_MODULE.badges} />

            <ModuleUnits units={MOCK_MODULE.units} onUnitClick={handleUnitClick} />

            <ModuleNavigation
              previousModule={MOCK_MODULE.previousModule}
              nextUnit={MOCK_MODULE.nextUnit}
              onPreviousClick={handlePreviousModule}
              onNextClick={handleNextUnit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
