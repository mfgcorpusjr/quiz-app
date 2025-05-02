import {
  StyleSheet,
  Pressable,
  View,
  Text,
  PressableProps,
} from "react-native";

import colors from "@/constants/colors";

type ButtonProps = {
  text: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

export default function Button({ text, rightIcon, ...rest }: ButtonProps) {
  return (
    <Pressable {...rest} style={styles.container}>
      <Text style={styles.text}>{text}</Text>

      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    padding: 20,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
