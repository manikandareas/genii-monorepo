import { Button, Card } from "@genii/ui/components";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ChapterContent as ChapterContentType } from "./types";

interface ChapterContentProps {
  chapter: ChapterContentType;
  onPrevious: () => void;
  onNext: () => void;
}

export function ChapterContent({ chapter, onPrevious, onNext }: ChapterContentProps) {
  return (
    <div className="lg:col-span-4 space-y-8">
      {/* Chapter image/example */}
      <Card className="overflow-hidden border-none bg-pink-50 p-8 flex flex-col items-center justify-center min-h-[300px] relative">
        <div className="max-w-md mx-auto">
          {/* Example UI elements from the screenshot */}
          <div className="bg-white p-4 rounded-md shadow-sm mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Item added to your cart</span>
            </div>
            <X className="h-5 w-5 text-gray-400 cursor-pointer" />
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">75%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="default" className="bg-gray-800 text-white">
              Sneakers
            </Button>
            <Button variant="outline" className="border-gray-300">
              Slippers
            </Button>
            <Button variant="outline" className="border-gray-300">
              Boots
            </Button>
          </div>
        </div>
      </Card>

      {/* Chapter content */}
      <div className="space-y-6">
        {chapter.content.map((paragraph, i) => {
          // Special styling for the "Remember" paragraph
          if (paragraph.startsWith("Remember:")) {
            return (
              <div key={i} className="bg-amber-50 p-4 rounded-md border border-amber-100">
                <p className="flex items-center">
                  <span className="mr-2">🔍</span>
                  {paragraph}
                </p>
              </div>
            );
          }

          return (
            <p key={i} className="text-base text-muted-foreground">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Example description */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Example:</h3>
        <p className="text-base text-muted-foreground">{chapter.example}</p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
        <Button variant="outline" className="flex items-center" onClick={onPrevious}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous Unit
        </Button>
        <Button className="flex items-center" onClick={onNext}>
          Next Unit
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
