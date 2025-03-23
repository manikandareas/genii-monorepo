import { Button } from "@genii/ui/components";

interface Unit {
  id: string;
  title: string;
  completed: boolean;
  active: boolean;
}

interface ModuleUnitsProps {
  units: Unit[];
  onUnitClick: (unitId: string) => void;
}

export function ModuleUnits({ units, onUnitClick }: ModuleUnitsProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">Units in this module</h3>
      <div className="space-y-3">
        {units.map((unit, index) => (
          <div
            key={unit.id}
            className={`p-4 rounded-lg border ${
              unit.active
                ? "border-primary bg-primary/5"
                : unit.completed
                  ? "bg-gray-50 border-gray-200"
                  : "border-gray-200"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                  unit.completed
                    ? "bg-green-100 text-green-600"
                    : unit.active
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-grow">
                <h4 className={`font-medium ${unit.active ? "text-primary" : ""}`}>{unit.title}</h4>
                <p className="text-sm text-gray-500">
                  {unit.completed ? "Completed" : unit.active ? "In progress" : "Not started"}
                </p>
              </div>
              <Button
                disabled={!unit.active && !unit.completed}
                variant={unit.active ? "default" : "outline"}
                size="sm"
                onClick={() => onUnitClick(unit.id)}
              >
                {unit.completed ? "Review" : unit.active ? "Continue" : "Not started"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
