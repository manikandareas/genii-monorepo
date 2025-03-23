"use client";

import { useState, useEffect, useCallback } from "react";
import { QuizTimer } from "./ui/QuizTimer";
import { QuizHeader } from "./ui/QuizHeader";
import { FocusModeHeader } from "./ui/FocusModeHeader";
import { QuestionDisplay } from "./ui/QuestionDisplay";
import { AnswerOptions } from "./ui/AnswerOptions";
import { FeedbackDisplay } from "./ui/FeedbackDisplay";
import { QuizNavigation } from "./ui/QuizNavigation";
import { QuizResults } from "./ui/QuizResults";
import { QuizQuestion, QuizResults as QuizResultsType } from "./types";

// Mock quiz data - this would come from API in production
const quizData: QuizQuestion[] = [
  {
    id: "1",
    text: "What is the main benefit of using React hooks?",
    type: "single",
    options: [
      { id: "a", text: "They make code more imperative" },
      { id: "b", text: "They allow using state in functional components" },
      { id: "c", text: "They decrease performance" },
      { id: "d", text: "They replace the need for HTML" },
    ],
    correctAnswers: ["b"],
    explanation:
      "React hooks like useState allow functional components to use state and other React features without writing a class component.",
  },
  {
    id: "2",
    text: "Which of the following are valid ways to manage state in React? Select all that apply.",
    type: "multiple",
    image: "/images/react-state-management.webp",
    options: [
      { id: "a", text: "useState hook" },
      { id: "b", text: "useReducer hook" },
      { id: "c", text: "useEffect hook" },
      { id: "d", text: "Context API" },
    ],
    correctAnswers: ["a", "b", "d"],
    explanation:
      "useState and useReducer are primary hooks for state management. Context API can be used for passing state down the component tree without prop drilling. useEffect is for side effects, not state management.",
  },
  {
    id: "3",
    text: "What's the correct way to conditionally render a component in React?",
    type: "single",
    options: [
      { id: "a", text: "Using if/else statements inside the render method" },
      { id: "b", text: "Using the conditional (ternary) operator" },
      { id: "c", text: "Using switch statements" },
      { id: "d", text: "All of the above" },
    ],
    correctAnswers: ["d"],
    explanation:
      "React allows conditional rendering using any JavaScript expressions. You can use if/else statements, ternary operators, logical && operator, or switch statements.",
  },
  {
    id: "4",
    text: "Which architecture pattern is shown in this diagram?",
    type: "single",
    image: "/images/mvc-diagram.png",
    options: [
      { id: "a", text: "Microservices" },
      { id: "b", text: "Model-View-Controller (MVC)" },
      { id: "c", text: "Event-driven" },
      { id: "d", text: "Serverless" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The diagram shows the Model-View-Controller (MVC) pattern, which separates an application into three main components: the model (data), the view (user interface), and the controller (business logic).",
  },
  {
    id: "5",
    text: "Is Next.js a framework or a library?",
    type: "thisOrThat",
    options: [
      { id: "a", text: "Framework", image: "/images/framework.png" },
      { id: "b", text: "Library", image: "/images/library.png" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Next.js is a React framework that provides structure, features, and optimizations for your application, including routing, rendering methods, and data fetching capabilities.",
  },
  {
    id: "6",
    text: "Match the following UI components with their appropriate use cases:",
    type: "multiple",
    options: [
      { id: "a", text: "Modal dialogs for critical confirmations", image: "/images/modal.png" },
      { id: "b", text: "Tooltips for supplementary information", image: "/images/tooltip.png" },
      { id: "c", text: "Breadcrumbs for navigation hierarchy", image: "/images/breadcrumbs.png" },
      { id: "d", text: "Carousels for product showcases", image: "/images/carousel.png" },
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation:
      "All these UI components serve specific purposes in enhancing user experience when used appropriately in their respective contexts.",
  },
];

export default function QuizClient() {
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResultsType | null>(null);

  // Timer state
  const [totalSeconds, setTotalSeconds] = useState(15 * 60); // 15 minutes
  const [timerActive, setTimerActive] = useState(true);
  const [showTimer, setShowTimer] = useState(true);

  // UI state
  const [quizMode, setQuizMode] = useState<"normal" | "focus">("normal");
  const [isUnsure, setIsUnsure] = useState(false);

  // Calculate hours, minutes, seconds for display
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Current question
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  // Handle timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && !quizCompleted && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
    } else if (totalSeconds === 0 && !quizCompleted) {
      // Auto-submit when time runs out
      handleSubmitQuiz();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, totalSeconds, quizCompleted]);

  // Handle selecting an answer
  const handleSelectAnswer = useCallback(
    (answerIds: string[]) => {
      if (showFeedback) return; // Prevent changing answer after showing feedback

      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: answerIds,
      }));
    },
    [currentQuestion.id, showFeedback]
  );

  // Check if the answer is correct
  const isCurrentAnswerCorrect = useCallback(() => {
    const selected = selectedAnswers[currentQuestion.id] || [];
    const correct = currentQuestion.correctAnswers;

    // For single/thisOrThat questions, there should be exactly one answer
    if (currentQuestion.type === "single" || currentQuestion.type === "thisOrThat") {
      return selected.length === 1 && correct.includes(selected[0]);
    }

    // For multiple-choice questions, all correct options must be selected, and no incorrect ones
    if (currentQuestion.type === "multiple") {
      return (
        selected.length > 0 &&
        selected.every((id) => correct.includes(id)) &&
        correct.every((id) => selected.includes(id))
      );
    }

    return false;
  }, [currentQuestion, selectedAnswers]);

  // Handle "Check Answer" button
  const handleCheckAnswer = useCallback(() => {
    setShowFeedback(true);
  }, []);

  // Handle next question navigation
  const handleNextQuestion = useCallback(() => {
    setShowFeedback(false);
    setIsUnsure(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  }, []);

  // Handle previous question navigation
  const handlePrevQuestion = useCallback(() => {
    setShowFeedback(false);
    setIsUnsure(false);
    setCurrentQuestionIndex((prev) => prev - 1);
  }, []);

  // Submit the entire quiz
  const handleSubmitQuiz = useCallback(() => {
    // Stop the timer
    setTimerActive(false);

    // Calculate results
    let correctCount = 0;
    let answeredCount = 0;

    quizData.forEach((question) => {
      const userAnswers = selectedAnswers[question.id] || [];
      if (userAnswers.length > 0) {
        answeredCount++;

        // Check if answer is correct
        if (
          question.type === "single" || question.type === "thisOrThat"
            ? userAnswers.length === 1 && question.correctAnswers.includes(userAnswers[0])
            : userAnswers.every((id) => question.correctAnswers.includes(id)) &&
              question.correctAnswers.every((id) => userAnswers.includes(id))
        ) {
          correctCount++;
        }
      }
    });

    // Calculate score (as percentage)
    const score = (correctCount / quizData.length) * 100;

    // Set results
    setQuizResults({
      score,
      correctAnswers: correctCount,
      totalQuestions: quizData.length,
      timeSpent: 15 * 60 - totalSeconds, // Time spent in seconds
      answeredQuestions: answeredCount,
    });

    // Mark quiz as completed
    setQuizCompleted(true);
  }, [selectedAnswers, quizData, totalSeconds]);

  // Retry the quiz
  const handleRetryQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setQuizCompleted(false);
    setQuizResults(null);
    setTotalSeconds(15 * 60);
    setTimerActive(true);
    setIsUnsure(false);
  }, []);

  // Toggle focus mode
  const handleToggleQuizMode = useCallback(() => {
    setQuizMode((prev) => (prev === "normal" ? "focus" : "normal"));
  }, []);

  // Toggle timer visibility
  const handleToggleTimer = useCallback(() => {
    setShowTimer((prev) => !prev);
  }, []);

  // Exit quiz
  const handleExitQuiz = useCallback(() => {
    // In a real app, this would navigate back to course or module page
    console.log("Exiting quiz");
  }, []);

  // If quiz is completed, show results
  if (quizCompleted && quizResults) {
    return (
      <QuizResults
        results={quizResults}
        onRetryQuiz={handleRetryQuiz}
        onExitQuiz={handleExitQuiz}
      />
    );
  }

  // Current selected answers for this question
  const currentSelected = selectedAnswers[currentQuestion.id] || [];

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Header with timer and controls */}
      {quizMode === "normal" ? (
        <QuizHeader
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          showTimer={showTimer}
          onExitQuiz={handleExitQuiz}
          onToggleQuizMode={handleToggleQuizMode}
          onToggleTimer={handleToggleTimer}
        />
      ) : (
        <FocusModeHeader
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          showTimer={showTimer}
          onExitQuiz={handleExitQuiz}
          onToggleQuizMode={handleToggleQuizMode}
          onToggleTimer={handleToggleTimer}
        />
      )}

      <div
        className={`
        flex-1 w-full mx-auto px-3 sm:px-6 py-4 sm:py-6
        ${quizMode === "focus" ? "pt-14 sm:pt-16 max-w-4xl" : "max-w-3xl"}
      `}
      >
        <div
          className={`
          space-y-4
          ${quizMode === "focus" ? "bg-white p-4 sm:p-6" : "p-4 sm:p-6"}
        `}
        >
          {/* Question */}
          <QuestionDisplay
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quizData.length}
            quizMode={quizMode}
          />

          {/* Answer options */}
          <AnswerOptions
            question={currentQuestion}
            selectedAnswers={currentSelected}
            isUnsure={isUnsure}
            showFeedback={showFeedback}
            disabled={showFeedback}
            setSelectedAnswers={handleSelectAnswer}
            setIsUnsure={setIsUnsure}
          />

          {/* Feedback section */}
          <FeedbackDisplay
            question={currentQuestion}
            isCorrect={isCurrentAnswerCorrect()}
            showFeedback={showFeedback}
          />
        </div>

        {/* Navigation and controls */}
        <QuizNavigation
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={quizData.length}
          selectedAnswers={currentSelected}
          showFeedback={showFeedback}
          isLastQuestion={isLastQuestion}
          quizCompleted={quizCompleted}
          handleCheckAnswer={handleCheckAnswer}
          handleNextQuestion={handleNextQuestion}
          handlePrevQuestion={handlePrevQuestion}
          handleSubmitQuiz={handleSubmitQuiz}
        />
      </div>
    </div>
  );
}
