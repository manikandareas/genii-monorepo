import { Button } from "@genii/ui/components";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationItem {
  id: string;
  title: string;
}

interface ModuleNavigationProps {
  previousModule?: NavigationItem | null;
  nextUnit?: NavigationItem | null;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

export function ModuleNavigation({
  previousModule,
  nextUnit,
  onPreviousClick,
  onNextClick,
}: ModuleNavigationProps) {
  return (
    <div className="flex mt-8 items-center justify-between">
      {previousModule ? (
        <Button variant="outline" className="flex items-center gap-2" onClick={onPreviousClick}>
          <ArrowLeft size={16} />
          Previous Module
        </Button>
      ) : (
        <div></div>
      )}

      {nextUnit && (
        <Button className="flex items-center gap-2" onClick={onNextClick}>
          Continue Learning
          <ArrowRight size={16} />
        </Button>
      )}
    </div>
  );
}
