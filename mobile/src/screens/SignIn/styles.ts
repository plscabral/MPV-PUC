import { StyleSheet } from 'react-native';
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
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "600"
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  signUpText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold"
  }
});
