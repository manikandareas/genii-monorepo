import { Button, Card, Badge, Progress } from "@genii/ui/components";
import {
  Languages,
  Users,
  Calendar,
  Star,
  Share2,
  Bookmark,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { UserCourseProgress } from "@genii/dto";
import Link from "next/link";

type CourseInfoCardProps = {
  isPremium: boolean;
  unitCount: number;
  difficulty: string;
  duration: string;
  effort: string;
  studentsEnrolled: number;
  language: string;
  updatedAt: string;
  averageRating: number;
  reviewCount: number;
  completedCount: number;
  userProgress?: UserCourseProgress | null;
  lastUnitId?: string;
  courseId: string;
};

export function CourseInfoCard({
  isPremium,
  unitCount,
  difficulty,
  duration,
  effort,
  studentsEnrolled,
  language,
  updatedAt,
  averageRating,
  reviewCount,
  completedCount,
  userProgress,
  lastUnitId,
  courseId,
}: CourseInfoCardProps) {
  const hasProgress = userProgress !== null && userProgress !== undefined;

  return (
    <Card className="p-6 border-none shadow-md bg-white transition-all hover:shadow-lg">
      {/* Progress Bar */}
      {hasProgress && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Your progress</span>
            <span className="text-sm font-semibold">{userProgress.overall.percentage}%</span>
          </div>
          <Progress value={userProgress.overall.percentage} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">
            {userProgress.overall.completed} of {userProgress.overall.total} units completed
          </p>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-1 flex items-center gap-2">
          {isPremium ? <span className="text-primary">Premium</span> : <span>Free</span>}
          {isPremium && (
            <Badge variant="secondary" className="px-2 py-0.5">
              <span className="text-xs font-normal">Most Popular</span>
            </Badge>
          )}
        </h2>
      </div>

      {/* Stats and meta info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-md bg-gray-50">
          <p className="text-xs text-muted-foreground uppercase mb-1">Units</p>
          <p className="font-medium text-lg">{unitCount}</p>
        </div>
        <div className="p-3 rounded-md bg-gray-50">
          <p className="text-xs text-muted-foreground uppercase mb-1">Difficulty</p>
          <p className="font-medium text-lg capitalize">{difficulty.toLowerCase()}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 rounded-md bg-gray-50">
          <p className="text-xs text-muted-foreground uppercase mb-1">Duration</p>
          <p className="font-medium text-lg">{duration}</p>
        </div>
        <div className="p-3 rounded-md bg-gray-50">
          <p className="text-xs text-muted-foreground uppercase mb-1">Effort</p>
          <p className="font-medium text-lg">{effort}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-5"></div>

      {/* Additional details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center text-sm">
          <Users className="h-4 w-4 mr-3 text-primary" />
          <span>
            Students: <strong>{studentsEnrolled.toLocaleString()}</strong>
          </span>
        </div>
        <div className="flex items-center text-sm">
          <Languages className="h-4 w-4 mr-3 text-primary" />
          <span>
            Language: <strong>{language}</strong>
          </span>
        </div>
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-3 text-primary" />
          <span>
            Updated: <strong>{new Date(updatedAt).toLocaleDateString()}</strong>
          </span>
        </div>
        <div className="flex items-center text-sm">
          <Star className="h-4 w-4 mr-3 text-amber-500" fill="currentColor" />
          <span>
            <strong>{averageRating}</strong> ({reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center text-sm">
          <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
          <span>
            <strong>{completedCount}</strong> students completed
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div>
        {hasProgress ? (
          <Link
            href={`/courses/${courseId}/units/${lastUnitId || userProgress.byModule[0].moduleId}`}
          >
            <Button className="w-full bg-primary hover:bg-primary/90 text-white group" size="lg">
              <PlayCircle className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Continue Learning
            </Button>
          </Link>
        ) : (
          <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
            Enroll now
          </Button>
        )}
        <div className="flex items-center gap-2 mt-3">
          <Button variant="outline" className="flex-1 hover:bg-gray-50" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" className="flex-1 hover:bg-gray-50" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
}
