"use client";

import React from "react";
import { QuizQuestion } from "../types";
import { Card } from "@genii/ui/components/card";
import { CheckCircleIcon, XCircleIcon, InfoIcon } from "lucide-react";

interface FeedbackDisplayProps {
  question: QuizQuestion;
  isCorrect: boolean;
  showFeedback: boolean;
}

export function FeedbackDisplay({ question, isCorrect, showFeedback }: FeedbackDisplayProps) {
  if (!showFeedback) return null;

  return (
    <Card className="mt-6 p-4 bg-muted/30">
      <div className="flex gap-3 items-start">
        {isCorrect ? (
          <CheckCircleIcon className="text-green-500 mt-0.5 h-5 w-5 flex-shrink-0" />
        ) : (
          <XCircleIcon className="text-red-500 mt-0.5 h-5 w-5 flex-shrink-0" />
        )}

        <div>
          <h4 className="font-medium mb-1">{isCorrect ? "Correct!" : "Incorrect"}</h4>

          {question.explanation && (
            <div className="text-sm text-muted-foreground">
              <div className="flex gap-1.5 items-center mb-1 text-xs font-medium text-muted-foreground">
                <InfoIcon className="h-3.5 w-3.5" /> Explanation
              </div>
              <p>{question.explanation}</p>
            </div>
          )}

          {!isCorrect && !question.explanation && (
            <div className="text-sm text-muted-foreground">
              <p>The correct answer is:</p>
              <ul className="list-disc list-inside mt-1">
                {question.correctAnswers.map((answerId) => {
                  const option = question.options.find((opt) => opt.id === answerId);
                  return option ? <li key={answerId}>{option.text}</li> : null;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
