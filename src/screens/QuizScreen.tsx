import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import QuestionCard from "@/components/QuestionCard";
import ResultsCard from "@/components/ResultsCard";
import Button from "@/components/Button";

import { useQuizContext } from "@/providers/QuizProvider";

import colors from "@/constants/colors";

export default function QuizScreen() {
  const { numberOfQuestions, index, question, handleNext } = useQuizContext();

  const renderHeader = () => {
    if (question) {
      return (
        <Text style={styles.header}>
          Question {index + 1}/{numberOfQuestions}
        </Text>
      );
    }

    return <View />;
  };

  const renderBody = () => {
    if (question) {
      return (
        <View style={{ gap: 12 }}>
          <QuestionCard question={question} />
          <Text style={styles.time}>20 sec</Text>
        </View>
      );
    }

    return <ResultsCard />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {renderHeader()}

        {renderBody()}

        <Button
          text={question ? "Next" : "Restart"}
          rightIcon={
            <Ionicons
              name={question ? "arrow-forward-outline" : "refresh-outline"}
              size={24}
              color="white"
            />
          }
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGreen,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    color: colors.darkGreen,
    textAlign: "center",
  },
  time: {
    color: colors.darkGreen,
    fontWeight: "bold",
    textAlign: "center",
  },
});
