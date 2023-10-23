import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

// utils
import { colors } from "../utils/colors";

type Props = {
  text: String
} & TouchableOpacityProps

export function Button({ text, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue500,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  text: {
    fontWeight: "800",
    color: colors.white
  }
});
