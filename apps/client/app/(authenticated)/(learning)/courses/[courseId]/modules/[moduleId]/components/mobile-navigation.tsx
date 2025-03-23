import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@genii/ui/components";
import { Menu } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
}

export function MobileNavigation({
  isOpen,
  onOpenChange,
  children,
  title = "Navigation",
}: MobileNavigationProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{title}</span>
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-0 w-full sm:w-[350px]">
        <SheetHeader className="sr-only">
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <div className="h-full overflow-y-auto">{children}</div>
      </SheetContent>
    </Sheet>
  );
}
