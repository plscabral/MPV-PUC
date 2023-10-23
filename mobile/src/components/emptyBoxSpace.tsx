import { View, StyleSheet } from "react-native";

export function EmptyBoxSpace() {
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28
  }
})
