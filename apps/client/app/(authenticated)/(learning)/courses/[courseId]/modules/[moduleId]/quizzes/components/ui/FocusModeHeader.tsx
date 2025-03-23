"use client";

import React from "react";
import { Button } from "@genii/ui/components/button";
import { Minimize, TimerIcon, TimerOff, X } from "lucide-react";
import { QuizTimer } from "./QuizTimer";

export interface FocusModeHeaderProps {
  hours: number;
  minutes: number;
  seconds: number;
  showTimer: boolean;
  onExitQuiz: () => void;
  onToggleQuizMode: () => void;
  onToggleTimer: () => void;
}

export function FocusModeHeader({
  hours,
  minutes,
  seconds,
  showTimer,
  onExitQuiz,
  onToggleQuizMode,
  onToggleTimer,
}: FocusModeHeaderProps) {
  return (
    <div className="fixed z-10 top-2 right-2 sm:top-4 sm:right-4 flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
      {showTimer && (
        <div className="mr-1 sm:mr-0">
          <QuizTimer hours={hours} minutes={minutes} seconds={seconds} variant="focus" />
        </div>
      )}

      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTimer}
          className="h-8 w-8 sm:h-9 sm:w-9 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
        >
          {showTimer ? (
            <TimerOff className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          ) : (
            <TimerIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          )}
          <span className="sr-only">{showTimer ? "Hide Timer" : "Show Timer"}</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleQuizMode}
          className="h-8 w-8 sm:h-9 sm:w-9 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
        >
          <Minimize className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          <span className="sr-only">Exit Focus Mode</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onExitQuiz}
          className="h-8 w-8 sm:h-9 sm:w-9 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
        >
          <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          <span className="sr-only">Exit Quiz</span>
        </Button>
      </div>
    </div>
  );
}
