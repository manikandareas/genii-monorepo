"use client";

import React from "react";
import { Clock1 } from "lucide-react";

export interface QuizTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  variant: "normal" | "focus";
}

export function QuizTimer({ hours, minutes, seconds, variant = "normal" }: QuizTimerProps) {
  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  if (variant === "focus") {
    // Enhanced timer for focus mode with better mobile support
    return (
      <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-center shadow-sm">
        <Clock1 className="h-3.5 w-3.5 hidden sm:inline-block" />
        <span className="text-sm font-mono font-medium">
          {formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
        </span>
      </div>
    );
  }

  // Normal mode timer with custom display
  return (
    <div className="flex items-center">
      {/* <span className="text-gray-500 mr-2 text-sm">Time left:</span> */}
      <div className="flex space-x-1 sm:space-x-2 items-center">
        {/* Hours */}
        <div className="bg-gray-900 text-white px-1.5 sm:px-2 py-1 rounded-md font-mono font-bold text-xs sm:text-sm w-6 sm:w-7 flex justify-center">
          {formatNumber(hours)}
        </div>
        <span className="text-gray-500 font-bold text-xs sm:text-sm">:</span>

        {/* Minutes */}
        <div className="bg-gray-900 text-white px-1.5 sm:px-2 py-1 rounded-md font-mono font-bold text-xs sm:text-sm w-6 sm:w-7 flex justify-center">
          {formatNumber(minutes)}
        </div>
        <span className="text-gray-500 font-bold text-xs sm:text-sm">:</span>

        {/* Seconds */}
        <div className="bg-gray-900 text-white px-1.5 sm:px-2 py-1 rounded-md font-mono font-bold text-xs sm:text-sm w-6 sm:w-7 flex justify-center">
          {formatNumber(seconds)}
        </div>
      </div>
    </div>
  );
}
