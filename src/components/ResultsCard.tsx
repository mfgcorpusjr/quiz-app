import { View, Text } from "react-native";

import Card from "@/components/Card";

import { useQuizContext } from "@/providers/QuizProvider";

export default function ResultsCard() {
  const { score, numberOfQuestions, bestScore } = useQuizContext();

  return (
    <Card title="Well done!">
      <View style={{ gap: 12 }}>
        <Text>
          Correct answers: {score}/{numberOfQuestions}
        </Text>
        <Text>Best score: {bestScore}</Text>
      </View>
    </Card>
  );
}
