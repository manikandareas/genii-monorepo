"use client";

import Image from "next/image";
import { FileQuestionIcon } from "lucide-react";
import { QuizQuestion } from "../types";

interface QuestionDisplayProps {
  question: QuizQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  quizMode: "normal" | "focus";
}

export function QuestionDisplay({
  question,
  currentQuestionIndex,
  totalQuestions,
  quizMode,
}: QuestionDisplayProps) {
  // Focus mode question indicator - centered pill design
  if (quizMode === "focus") {
    return (
      <>
        <div className="mb-4 sm:mb-6 text-center">
          <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center leading-tight">
          {question.text}
        </h2>

        {question.image && (
          <div className="mb-6 sm:mb-8 rounded-lg overflow-hidden">
            <Image
              src={question.image}
              alt="Question"
              width={700}
              height={400}
              className="w-full object-contain max-h-[250px] sm:max-h-[400px]"
              priority
            />
          </div>
        )}
      </>
    );
  }

  // Normal mode question display
  return (
    <>
      <h4 className="inline-flex items-center text-xs sm:text-sm font-medium gap-1">
        <FileQuestionIcon size={16} className="text-primary" /> Question{" "}
        <span className="font-bold">{currentQuestionIndex + 1}</span> of{" "}
        <span className="font-bold">{totalQuestions}</span>
      </h4>

      <h2 className="text-lg sm:text-xl font-semibold mt-2 mb-3 sm:mb-4 leading-tight">
        {question.text}
      </h2>

      {question.image && (
        <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden">
          <Image
            src={question.image}
            alt="Question"
            width={700}
            height={400}
            className="w-full object-contain max-h-[200px] sm:max-h-[350px]"
            priority
          />
        </div>
      )}
    </>
  );
}
