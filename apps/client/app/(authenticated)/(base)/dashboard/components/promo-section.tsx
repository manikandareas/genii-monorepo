"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Crown, Sparkles, Zap, BarChart } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { cn } from "@genii/ui/lib/utils";

type PromoBanner = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  themeColors: {
    base: string;
    accent: string;
  };
  buttonText?: string;
};

const promoBanners: PromoBanner[] = [
  {
    id: 1,
    title: "Premium Features",
    description: "Unlock exclusive content and advanced tools",
    icon: <Crown className="h-5 w-5 text-amber-400 drop-shadow-sm" />,
    themeColors: {
      base: "primary",
      accent: "primary",
    },
    buttonText: "Upgrade",
  },
  {
    id: 2,
    title: "Learning Analytics",
    description: "Track your progress with detailed insights",
    icon: <BarChart className="h-5 w-5 text-indigo-400 drop-shadow-sm" />,
    themeColors: {
      base: "primary",
      accent: "primary",
    },
    buttonText: "Explore",
  },
  {
    id: 3,
    title: "AI Tutor Plus",
    description: "Get personalized learning assistance",
    icon: <Sparkles className="h-5 w-5 text-amber-400 drop-shadow-sm" />,
    themeColors: {
      base: "primary",
      accent: "primary",
    },
    buttonText: "Try now",
  },
  {
    id: 4,
    title: "Speed Learning",
    description: "Master concepts 2x faster with our methods",
    icon: <Zap className="h-5 w-5 text-rose-400 drop-shadow-sm" />,
    themeColors: {
      base: "primary",
      accent: "primary",
    },
    buttonText: "Activate",
  },
];

export function PromoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % promoBanners.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? promoBanners.length - 1 : current - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "primary":
        return {
          bg: "bg-gradient-to-br from-card to-card/10",
          border: "border-primary/20",
          text: "text-primary dark:text-primary",
          button: "bg-primary hover:bg-primary/90 text-primary-foreground",
        };
      case "secondary":
        return {
          bg: "bg-secondary dark:bg-secondary/50",
          border: "border-secondary-foreground/20",
          text: "text-secondary-foreground dark:text-secondary-foreground",
          button: "bg-secondary-foreground hover:bg-secondary-foreground/90 text-secondary",
        };
      case "emerald":
        return {
          bg: "bg-emerald-50 dark:bg-emerald-900/30",
          border: "border-emerald-200 dark:border-emerald-800",
          text: "text-emerald-900 dark:text-emerald-50",
          button: "bg-emerald-600 hover:bg-emerald-700 text-white",
        };
      case "blue":
        return {
          bg: "bg-blue-50 dark:bg-blue-900/30",
          border: "border-blue-200 dark:border-blue-800",
          text: "text-blue-900 dark:text-blue-50",
          button: "bg-blue-600 hover:bg-blue-700 text-white",
        };
      default:
        return {
          bg: "bg-muted",
          border: "border-border",
          text: "text-foreground",
          button: "bg-primary hover:bg-primary/90 text-primary-foreground",
        };
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden  relative shadow-sm border border-border"
      {...handlers}
    >
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {promoBanners.map((banner) => {
          const themeClasses = getThemeClasses(banner.themeColors.base);

          return (
            <div
              key={banner.id}
              className={cn("w-full flex-shrink-0 p-5", themeClasses.bg, themeClasses.border)}
              style={{ minHeight: "240px" }}
            >
              <div className="relative h-full flex flex-col justify-between">
                {/* Icon with badge */}
                <div
                  className={cn(
                    "absolute top-0 right-0 p-1.5 rounded-full bg-background shadow-sm",
                    themeClasses.border
                  )}
                >
                  {banner.icon}
                </div>

                {/* Content */}
                <div className="mt-1 mb-4 flex-grow">
                  <h3 className={cn("text-base font-medium mb-1", themeClasses.text)}>
                    {banner.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{banner.description}</p>
                </div>

                {/* Button */}
                <button
                  className={cn(
                    "rounded text-sm py-2.5 px-3 text-center font-medium transition-all hover:scale-105 active:scale-95 shadow-sm",
                    themeClasses.button
                  )}
                >
                  {banner.buttonText || "Learn more"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-1.5 left-0 right-0 flex justify-center gap-1.5 mt-2">
        {promoBanners.map((_, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full transition-all duration-300 shadow-sm",
              activeIndex === index
                ? "w-4 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-muted hover:bg-muted-foreground/50"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-background hover:bg-muted rounded-full p-1 text-foreground/70 shadow-sm transition-transform hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-background hover:bg-muted rounded-full p-1 text-foreground/70 shadow-sm transition-transform hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
