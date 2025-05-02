export type Question = {
  title: string;
  options: string[];
  correctAnswer: string;
};

export type TQuizContext = {
  numberOfQuestions: number;
  index: number;
  question: Question | undefined;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  handleNext: () => void;
  score: number;
  bestScore: number;
};
