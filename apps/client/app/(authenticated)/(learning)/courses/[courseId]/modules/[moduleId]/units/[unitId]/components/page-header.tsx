import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
  section: string;
  chapter: string;
  totalChapters: number;
  title: string;
  courseId: string;
}

export function PageHeader({ section, chapter, totalChapters, title, courseId }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <Link
          href={`/courses/${courseId}`}
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Course
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
            <span>{section}</span>
            <span>•</span>
            <span>
              Chapter {chapter} of {totalChapters}
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>
      </div>
    </div>
  );
}
