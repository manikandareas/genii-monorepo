import { Card } from "@genii/ui/components";
import { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "default" | "feature" | "prerequisite" | "materials";
};

export function InfoCard({ title, description, icon, variant = "default" }: InfoCardProps) {
  // Map variants to style classes
  const cardStyles = {
    default: "border-l-4 border-l-primary/40",
    feature: "border-l-4 border-l-green-500/70",
    prerequisite: "border-l-4 border-l-amber-500/70",
    materials: "border-l-4 border-l-blue-500/70",
  };

  const titleStyles = {
    default: "text-foreground",
    feature: "text-green-700",
    prerequisite: "text-amber-700",
    materials: "text-blue-700",
  };

  return (
    <Card
      className={`p-5 border-none shadow-sm bg-white transition-all hover:shadow-md ${cardStyles[variant]}`}
    >
      <h3 className={`text-base font-medium mb-2 flex items-center gap-2 ${titleStyles[variant]}`}>
        {icon && <span className="text-current">{icon}</span>}
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}
