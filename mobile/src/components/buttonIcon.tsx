import { PropsWithChildren } from "react";
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

// utils
import { colors } from "../utils/colors";

type Props =  {
  color?: string
} & PropsWithChildren & TouchableOpacityProps

export function ButtonIcon({ color, children, ...rest }: Props) {
  return (
    <TouchableOpacity style={[
      styles.container,
      color ? { backgroundColor: color } : {backgroundColor: colors.blue500}
    ]}
    {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  }
});
