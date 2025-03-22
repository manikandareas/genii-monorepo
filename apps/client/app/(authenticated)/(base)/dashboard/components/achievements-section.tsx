import { Achievement } from "@genii/dto";
import { Card } from "@genii/ui/components";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AchievementsSectionProps {
  achievements: Achievement;
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <Card className="overflow-hidden border-none bg-white shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recent Achievements</h3>
          <Link
            href="/achievements"
            className="text-sm flex items-center text-muted-foreground hover:text-foreground"
          >
            View all <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-2">
          {achievements.badges.map((badge) => (
            <div key={badge.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className={`p-2 rounded-md mr-3 bg-purple-100`}>
                <Image src={badge.image_url as string} alt={badge.title} width={20} height={20} />
              </div>

              <div>
                <h4 className="font-medium text-sm">{badge.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
