import { CourseOverview } from "@genii/dto";
import { Accordion, AccordionContent, AccordionItem } from "@genii/ui/components/accordion";
import * as AccordionPrimitive from "@genii/ui/components/accordion";
import { ChevronRight, Film } from "lucide-react";

type ModuleAccordionProps = {
  items: CourseOverview["modules"];
};

const ModuleAccordion = ({ items }: ModuleAccordionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Course Table of Contents</h2>
      <Accordion type="multiple" className="w-full border  rounded-lg overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className={`border-0 ${index !== items.length - 1 ? "border-b" : ""}`}
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 px-5 text-left font-medium transition-all hover:bg-muted/30 data-[state=open]:bg-muted/20">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {index + 1}
                  </span>
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {item.units.length} {item.units.length === 1 ? "unit" : "units"}
                  </span>
                  <ChevronRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-90"
                    aria-hidden="true"
                  />
                </div>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="px-5 pb-4 pt-1 text-muted-foreground">
              <div className="space-y-2">
                {item.description && (
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                )}
                {item.units.map((unit) => (
                  <div
                    key={unit.id}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      {unit.type === "VIDEO" && (
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <Film className="text-primary h-4 w-4" />
                        </div>
                      )}
                      {unit.type === "INTERACTIVE" && (
                        <div className="bg-amber-500/10 p-1.5 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-amber-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                        </div>
                      )}
                      {unit.type === "TEXT" && (
                        <div className="bg-blue-500/10 p-1.5 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <line x1="10" y1="9" x2="8" y2="9" />
                          </svg>
                        </div>
                      )}
                      <span className="font-medium text-foreground">{unit.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium capitalize">
                        {unit.type.toLowerCase()}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export { ModuleAccordion };
