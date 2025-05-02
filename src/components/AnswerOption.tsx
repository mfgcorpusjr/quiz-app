import { StyleSheet, Pressable, Text } from "react-native";

import colors from "@/constants/colors";

export default function AnswerOption() {
  return (
    <Pressable style={styles.container}>
      <Text>Answer Option</Text>
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
