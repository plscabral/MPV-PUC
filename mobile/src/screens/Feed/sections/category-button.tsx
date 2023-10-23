import { Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

// utils
import { colors } from "../../../utils/colors";

// ------------------------------------------------------------------------------

type Props = {
  title: string,
  active?: boolean
} & RectButtonProps

// ------------------------------------------------------------------------------

export function CategoryButton({ title, active = false, ...rest }: Props) {
  return (
    <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
      <Text style={[styles.text, active && styles.textActive]}>
        {title}
      </Text>
    </RectButton>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray800,
    height: 45,
    width: 115,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 4
  },
  containerActive: {
    backgroundColor: colors.blue500
  },
  text: {
    color: colors.white,
  },
  textActive: {
    color: colors.white
  }
});
