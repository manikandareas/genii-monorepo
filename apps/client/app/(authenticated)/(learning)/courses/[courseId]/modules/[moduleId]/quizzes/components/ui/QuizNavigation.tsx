"use client";

import React from "react";
import { Button } from "@genii/ui/components/button";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

interface QuizNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswers: string[];
  showFeedback: boolean;
  isLastQuestion: boolean;
  quizCompleted: boolean;
  handleCheckAnswer: () => void;
  handleNextQuestion: () => void;
  handlePrevQuestion: () => void;
  handleSubmitQuiz: () => void;
}

export function QuizNavigation({
  currentQuestionIndex,
  totalQuestions,
  selectedAnswers,
  showFeedback,
  isLastQuestion,
  quizCompleted,
  handleCheckAnswer,
  handleNextQuestion,
  handlePrevQuestion,
  handleSubmitQuiz,
}: QuizNavigationProps) {
  // No answers selected yet - cannot proceed
  const answersSelected = selectedAnswers.length > 0;

  return (
    <div className="flex justify-between mt-6 sm:mt-8">
      {/* Back button - only show if not on first question */}
      {currentQuestionIndex > 0 && !quizCompleted ? (
        <Button
          variant="outline"
          onClick={handlePrevQuestion}
          className="gap-1 text-xs sm:text-sm px-2 sm:px-3"
          disabled={showFeedback}
          size="sm"
        >
          <ChevronLeftIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="sm:inline">Back</span>
        </Button>
      ) : (
        <div></div>
      )}

      {/* Action buttons - changes based on state */}
      <div className="flex gap-2">
        {/* Check Answer button - when not showing feedback yet */}
        {!showFeedback && !quizCompleted && (
          <Button
            onClick={handleCheckAnswer}
            disabled={!answersSelected}
            size="sm"
            className="text-xs sm:text-sm px-2 sm:px-3 sm:h-9"
          >
            <CheckIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
            Check
            <span className="hidden sm:inline ml-1">Answer</span>
          </Button>
        )}

        {/* Next button - when showing feedback and not the last question */}
        {showFeedback && !isLastQuestion && !quizCompleted && (
          <Button
            onClick={handleNextQuestion}
            size="sm"
            className="text-xs sm:text-sm px-2 sm:px-3 sm:h-9"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <span className="sm:inline"> Question</span>
            <ChevronRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
          </Button>
        )}

        {/* Submit Quiz button - when on last question and showing feedback */}
        {showFeedback && isLastQuestion && !quizCompleted && (
          <Button
            onClick={handleSubmitQuiz}
            size="sm"
            className="text-xs sm:text-sm px-2 sm:px-3 sm:h-9"
          >
            <span className="sm:inline">Finish</span>
            <span className="hidden sm:inline"> Quiz</span>
            <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
}
