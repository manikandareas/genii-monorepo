import { Button, Badge } from "@genii/ui/components";
import { Wand2 } from "lucide-react";

interface PersonalizationSectionProps {
  isPersonalized: boolean;
  canBePersonalized: boolean;
  onPersonalize: () => void;
  onTogglePersonalization: () => void;
}

export function PersonalizationSection({
  isPersonalized,
  canBePersonalized,
  onPersonalize,
  onTogglePersonalization,
}: PersonalizationSectionProps) {
  if (canBePersonalized && !isPersonalized) {
    return (
      <div className="mb-6 border border-primary/30 rounded-lg p-4 bg-primary/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2 text-primary">
              <Wand2 size={18} />
              Personalize This Module
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Adapt content to your learning style and preferences
            </p>
          </div>
          <Button variant="default" className="flex items-center gap-2" onClick={onPersonalize}>
            <Wand2 size={16} className="mr-1" />
            Personalize
          </Button>
        </div>
      </div>
    );
  }

  if (isPersonalized) {
    return (
      <div className="mb-6 flex justify-between items-center p-4 rounded-lg bg-primary/5 border border-primary/30">
        <div className="flex items-center">
          <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary mr-3">
            Personalized
          </Badge>
          <span className="text-sm text-muted-foreground">
            This module has been personalized to your needs
          </span>
        </div>
        <Button variant="outline" size="sm" onClick={onTogglePersonalization}>
          Switch to Regular
        </Button>
      </div>
    );
  }

  return null;
}
