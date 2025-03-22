import { Card } from "@genii/ui/components";
import { Calendar, Clock, Flame } from "lucide-react";

interface StreaksSectionProps {
  streakData: StreakData;
}

export function StreaksSection({ streakData }: StreaksSectionProps) {
  // Calculate days of the week
  const today = new Date();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const todayIndex = today.getDay();

  // Calculate streak percentage for visual display
  const streakPercentage = Math.min(100, (streakData.current / streakData.target) * 100);

  return (
    <div className="space-y-6">
      {/* Streak Card */}
      <Card className="overflow-hidden p-6 border-none bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Current streak</h3>
          <div className="flex items-center text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
            <Flame className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{streakData.current} days</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-muted-foreground">Goal: {streakData.target} days</span>
            <span className="font-medium">
              {streakData.current}/{streakData.target}
            </span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
              style={{ width: `${streakPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map((day, index) => {
            const isToday = index === todayIndex;
            const isPast = index < todayIndex;
            const dayCompleted = isPast && streakData.completedDays.includes(index);

            return (
              <div
                key={index}
                className={`text-center py-2 rounded-xl ${
                  isToday
                    ? "border-2 border-amber-500"
                    : dayCompleted
                      ? "bg-amber-50"
                      : "bg-gray-50"
                }`}
              >
                <div className="text-xs mb-1">{day}</div>
                {dayCompleted && <Flame className="h-4 w-4 mx-auto text-amber-500" />}
              </div>
            );
          })}
        </div>

        <div className="text-xs text-gray-500 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{streakData.bestStreak} days best streak</span>
          </div>
          {streakData.lastCompleted && (
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Last completed: {new Date(streakData.lastCompleted).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
