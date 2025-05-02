import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

import questions from "@/questions";

import { TQuizContext } from "@/types";

const QuizContext = createContext<TQuizContext>({
  numberOfQuestions: 0,
  index: 0,
  question: undefined,
  selectedOption: "",
  setSelectedOption: () => {},
  handleNext: () => {},
  score: 0,
  bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const question = questions[index];
  const isFinished = index >= questions.length;

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinished]);

  const handleNext = () => {
    if (isFinished) {
      restartQuiz();
      return;
    }

    if (selectedOption === question.correctAnswer) {
      setScore((v) => v + 1);
    }

    setSelectedOption("");
    setIndex((v) => v + 1);
  };

  const restartQuiz = () => {
    setIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  return (
    <QuizContext.Provider
      value={{
        numberOfQuestions: questions.length,
        index,
        question,
        selectedOption,
        setSelectedOption,
        handleNext,
        score,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
