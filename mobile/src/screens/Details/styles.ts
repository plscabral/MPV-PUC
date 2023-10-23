import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue900,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  main: {
    gap: 30
  },
  thumb: {
    height: 220,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 16
  },
  content: {
    color: colors.gray300,
    textAlign: 'justify',
    fontWeight: "100",
    fontSize: 14
  },
  redirectArticleButton: {
    width: "100%",
    backgroundColor: colors.blue500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 50
  },
  redirectArticleText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: "bold",
  }
})
