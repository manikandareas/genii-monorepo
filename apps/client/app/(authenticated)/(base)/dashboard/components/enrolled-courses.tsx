import { EnrolledCourse } from "@genii/dto";
import { Button, Card, Progress } from "@genii/ui/components";
import { ChevronRight, Layout, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

interface EnrolledCoursesProps {
  courses: EnrolledCourse[];
}

export function EnrolledCourses({ courses }: EnrolledCoursesProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">My Courses</h1>
        <Link
          href="/courses"
          className="text-sm flex items-center text-muted-foreground hover:text-foreground"
        >
          More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <Card key={course.id} className="overflow-hidden border-none bg-white duration-200">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 mr-4 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center">
                  {index === 0 ? (
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                      <Layout className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Layout className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-base">{course.course.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                      {course.course.course_category.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{course.progress.overallProgress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      index === 0
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : "bg-gradient-to-r from-blue-400 to-blue-600"
                    }`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <Link href={`/courses/${course.courseId || course.id}`}>
                  <Button variant={"default"}>
                    Continue
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
