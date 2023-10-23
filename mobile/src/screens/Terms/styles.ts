import { StyleSheet } from 'react-native';

// colors
import { colors } from '../../utils/colors';

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
  header: {
    width: "100%",
    marginTop: 20,
    gap: 13,
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1
  },
  main: {
    marginTop: 30,
    width: "100%",
    height: "100%",
  }
});
