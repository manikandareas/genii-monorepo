export interface QuizQuestion {
  id: string;
  text: string;
  type: "single" | "multiple" | "thisOrThat";
  image?: string;
  options: QuizOption[];
  correctAnswers: string[];
  explanation?: string;
}

export interface QuizOption {
  id: string;
  text: string;
  image?: string;
}

export interface QuizResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  answeredQuestions: number;
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswers: string[];
  isUnsure: boolean;
  isCorrect?: boolean;
}
