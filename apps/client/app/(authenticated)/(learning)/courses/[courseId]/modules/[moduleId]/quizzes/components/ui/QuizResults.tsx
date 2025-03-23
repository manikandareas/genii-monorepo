"use client";

import React from "react";
import { Card } from "@genii/ui/components/card";
import { Button } from "@genii/ui/components/button";
import { QuizResults as QuizResultsType } from "../types";
import { AwardIcon, CheckCircleIcon, ClockIcon, BookOpenIcon, ArrowLeftIcon } from "lucide-react";

interface QuizResultsProps {
  results: QuizResultsType;
  onRetryQuiz: () => void;
  onExitQuiz: () => void;
}

export function QuizResults({ results, onRetryQuiz, onExitQuiz }: QuizResultsProps) {
  const { score, totalQuestions, correctAnswers, timeSpent, answeredQuestions } = results;
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  // Format score as percentage
  const scorePercentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card className="p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <AwardIcon className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-4">Quiz Completed!</h2>
          <p className="text-muted-foreground mt-1">Here's how you did</p>
        </div>

        <div className="grid gap-6 mb-8 sm:grid-cols-2">
          {/* Score Card */}
          <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <AwardIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Score</p>
              <p className="text-2xl font-bold">{scorePercentage}%</p>
            </div>
          </div>

          {/* Correct Answers Card */}
          <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Correct Answers</p>
              <p className="text-2xl font-bold">
                {correctAnswers} of {totalQuestions}
              </p>
            </div>
          </div>

          {/* Time Spent Card */}
          <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <ClockIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time Spent</p>
              <p className="text-2xl font-bold">
                {minutes}m {seconds}s
              </p>
            </div>
          </div>

          {/* Questions Answered Card */}
          <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <BookOpenIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Questions Answered</p>
              <p className="text-2xl font-bold">
                {answeredQuestions} of {totalQuestions}
              </p>
            </div>
          </div>
        </div>

        {/* Feedback message based on score */}
        <div className="mb-8 p-4 bg-muted/30 rounded-lg text-center">
          {scorePercentage >= 80 ? (
            <p className="text-lg">Great job! You've mastered this quiz!</p>
          ) : scorePercentage >= 60 ? (
            <p className="text-lg">Good work! You're on the right track.</p>
          ) : (
            <p className="text-lg">Keep practicing! You'll improve with more study.</p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={onExitQuiz} className="sm:order-1">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Exit Quiz
          </Button>
          <Button onClick={onRetryQuiz} className="sm:order-2">
            Try Again
          </Button>
        </div>
      </Card>
    </div>
  );
}
