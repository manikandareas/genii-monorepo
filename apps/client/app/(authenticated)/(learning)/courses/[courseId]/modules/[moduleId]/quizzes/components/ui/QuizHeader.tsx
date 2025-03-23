"use client";

import React from "react";
import { Button } from "@genii/ui/components/button";
import { Maximize, TimerIcon, TimerOff, X } from "lucide-react";
import { QuizTimer } from "./QuizTimer";

export interface QuizHeaderProps {
  hours: number;
  minutes: number;
  seconds: number;
  showTimer: boolean;
  onExitQuiz: () => void;
  onToggleQuizMode: () => void;
  onToggleTimer: () => void;
}

export function QuizHeader({
  hours,
  minutes,
  seconds,
  showTimer,
  onExitQuiz,
  onToggleQuizMode,
  onToggleTimer,
}: QuizHeaderProps) {
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onExitQuiz} className="rounded-full">
          <X className="h-5 w-5" />
          <span className="sr-only">Exit Quiz</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={onToggleTimer} className="rounded-full">
          {showTimer ? <TimerOff className="h-5 w-5" /> : <TimerIcon className="h-5 w-5" />}
          <span className="sr-only">{showTimer ? "Hide Timer" : "Show Timer"}</span>
        </Button>
        {showTimer && (
          <QuizTimer hours={hours} minutes={minutes} seconds={seconds} variant="normal" />
        )}
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={onToggleQuizMode} className="rounded-full">
          <Maximize className="h-5 w-5" />
          <span className="sr-only">Enter Focus Mode</span>
        </Button>
      </div>
    </div>
  );
}
