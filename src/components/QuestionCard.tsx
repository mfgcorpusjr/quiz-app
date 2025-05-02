import { View } from "react-native";

import Card from "@/components/Card";
import AnswerOption from "@/components/AnswerOption";

export default function QuestionCard() {
  return (
    <Card title="What is React Native?">
      <View style={{ gap: 12 }}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </View>
    </Card>
  );
}
