import { useState } from "react";
import Link from "next/link";
import { Button, Progress } from "@genii/ui/components";
import { ChevronDown, CheckCircle2, X } from "lucide-react";
import type { Module } from "./types";

interface CourseNavigationProps {
  modules: Module[];
  currentModuleId: string;
  currentUnitId: string;
  courseId: string;
  courseName: string;
  overallProgress: number;
  isMobileSheet?: boolean;
  onClose?: () => void;
}

export function CourseNavigation({
  modules,
  currentModuleId,
  currentUnitId,
  courseId,
  courseName,
  overallProgress,
  isMobileSheet = false,
  onClose,
}: CourseNavigationProps) {
  // Track which modules are expanded
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(
    // Initially expand the current module
    { [currentModuleId]: true }
  );

  // Toggle module expansion
  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const navigationContent = (
    <>
      {/* Course info header */}
      <div className="mb-6">
        {isMobileSheet && (
          <div className="flex items-center justify-between mb-4 border-b pb-3">
            <h3 className="text-lg font-medium">Course Navigation</h3>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
              <X className="h-5 w-5" />
              <span className="sr-only">Close navigation</span>
            </button>
          </div>
        )}
        <p className="text-sm text-muted-foreground mb-1">Course</p>
        <Link
          href={`/courses/${courseId}`}
          className="text-lg font-medium hover:text-yellow-600 transition-colors"
        >
          {courseName}
        </Link>
        <div className="mt-4">
          <div className="flex justify-between items-center text-sm mb-1.5">
            <span className="text-muted-foreground">Overall progress</span>
            <span className="font-medium">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
      </div>

      {/* Module navigation */}
      <div className="space-y-3">
        {modules.map((module) => (
          <div key={module.id} className="space-y-1">
            {/* Module header - clickable to expand/collapse */}
            <div
              className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                module.id === currentModuleId ? "bg-primary/10" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center space-x-3">
                <span
                  className={`text-sm font-medium ${module.id === currentModuleId ? "text-foreground" : ""}`}
                >
                  {module.title}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">{module.progress}%</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedModules[module.id] ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Units list - shown only if module is expanded */}
            {expandedModules[module.id] && (
              <div className="ml-3 space-y-1 mt-1">
                {module.units.map((unit) => (
                  <Link
                    key={unit.id}
                    href={`/courses/${courseId}/modules/${module.id}/units/${unit.id}`}
                    className={`flex items-center text-sm py-1.5 px-2 rounded-md ${
                      unit.id === currentUnitId
                        ? "bg-primary/5 text-foreground"
                        : "text-muted-foreground hover:bg-gray-50"
                    }`}
                    onClick={isMobileSheet ? onClose : undefined}
                  >
                    {unit.completed ? (
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                    ) : (
                      <div className="h-4 w-4 mr-2 rounded-full border border-gray-300 flex-shrink-0" />
                    )}
                    <span className="truncate">{unit.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button to continue to next section */}
      <div className="mt-8 pt-4 border-t border-gray-100">
        <Button className="w-full">Continue to Next Section</Button>
      </div>
    </>
  );

  // For mobile sheet view, we don't need the extra wrapper div
  if (isMobileSheet) {
    return <div className="p-4 h-full overflow-y-auto">{navigationContent}</div>;
  }

  // For desktop view
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 space-y-4 lg:sticky lg:top-4">
      {navigationContent}
    </div>
  );
}
