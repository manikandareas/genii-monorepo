import type { CourseCatalog } from "@genii/dto";
import { Button, Card } from "@genii/ui/components";
import { BookOpen, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

interface CourseCatalogProps {
  courses: CourseCatalog[];
}

export function CourseCatalog({ courses }: CourseCatalogProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Recommended for you</h2>
        <Link
          href="/courses/catalog"
          className="text-sm flex items-center text-muted-foreground hover:text-foreground"
        >
          View catalog <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden border-none bg-white  duration-200">
            <div className="w-full h-48 relative bg-gray-100">
              {course.thumbnail ? (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <BookOpen className="h-10 w-10 text-gray-400" />
                </div>
              )}
              {course.is_premium && (
                <div className="absolute top-2 right-2 bg-amber-300 text-foreground text-xs font-medium px-2 py-1 rounded">
                  Premium
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 mr-2">
                    Beginner
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 mr-2">
                    {course.category}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-2 line-clamp-2 ">{course.title}</h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">
                {course.shortDescription}
              </p>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div>
                  {course.stats.rating && (
                    <div className="flex items-center text-xs text-amber-500">
                      <Star className="fill-amber-500 h-3 w-3 mr-1" />
                      {course.stats.rating}
                    </div>
                  )}
                </div>
                <Link href={`/courses/${course.id}`}>
                  <Button>Enroll</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
