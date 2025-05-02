import { View, Text } from "react-native";

import Card from "@/components/Card";

export default function ResultsCard() {
  return (
    <Card title="Well done!">
      <View style={{ gap: 12 }}>
        <Text>Correct answers: 3/5</Text>
        <Text>Best score: 4</Text>
      </View>
    </Card>
  );
}
