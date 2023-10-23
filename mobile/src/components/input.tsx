import { TextInput, TextInputProps, StyleSheet } from "react-native";

// utils
import { colors } from "../utils/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.gray300}
      style={styles.container}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "auto",
    borderColor: colors.gray800,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    color: colors.white
  }
});
