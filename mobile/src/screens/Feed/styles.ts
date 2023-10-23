import { StyleSheet } from "react-native";

// colors
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue900,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  title: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 16
  },
  categoryList: {
    height: 45,
    justifyContent: 'center',
    paddingBottom: 5,
    marginTop: 25,
    marginRight: 10
  },
  articleContainer: {
    marginTop: 30,
    marginBottom: 50,
    width: "100%",
  },
  articleList: {
    justifyContent: 'center',
    paddingBottom: 60,
    marginBottom: 10
  }
});
