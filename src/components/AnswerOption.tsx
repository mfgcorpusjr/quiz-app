import { StyleSheet, Pressable, Text } from "react-native";

import { useQuizContext } from "@/providers/QuizProvider";

import colors from "@/constants/colors";

type AnswerOptionProps = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOptionProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={() => setSelectedOption(option)}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 20,
    borderRadius: 100,
  },
  selectedContainer: {
    backgroundColor: colors.limeGreen,
  },
});
