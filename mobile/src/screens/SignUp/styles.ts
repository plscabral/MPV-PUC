import { StyleSheet } from 'react-native';

// colors
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue900,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    gap: 10,
    width: "100%",
  },
  title: {
    fontSize: 16,
    color: colors.gray800,
    fontWeight: "500"
  },
  form: {
    marginTop: 40,
    gap: 20,
    width: "100%",
  },
  backContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  backText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold"
  }
});
