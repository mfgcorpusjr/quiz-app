import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import QuestionCard from "@/components/QuestionCard";
import ResultsCard from "@/components/ResultsCard";
import Button from "@/components/Button";

import colors from "@/constants/colors";

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Question 1/5</Text>

        <View>
          <QuestionCard />
          <Text style={styles.time}>20 sec</Text>
        </View>
        {/* <ResultsCard /> */}

        <Button
          text="Next"
          rightIcon={
            <Ionicons name="arrow-forward-outline" size={24} color="white" />
          }
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
    marginTop: 12,
  },
});
