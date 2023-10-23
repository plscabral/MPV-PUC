import { View, ViewProps, Text, StyleSheet } from "react-native";

// utils
import { colors } from "../utils/colors";

type Props = ViewProps;

export function TermsNotFound({ ...rest }: Props) {
  return (
    <View style={styles.notFoundContainer} {...rest}>
      <Text style={styles.notFoundText}>
        Nenhum termo encontrado. {`\n`}
        Cadastre e visualize suas notícias 😊
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 16,
    color: colors.gray300,
    fontWeight: "100",
    textAlign:"center"
  },
})
