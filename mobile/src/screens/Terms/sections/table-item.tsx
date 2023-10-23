import { View, Text, StyleSheet } from "react-native";

// components
import { ButtonIcon } from "../../../components/buttonIcon";

// icons
import { Trash } from "phosphor-react-native";

// utils
import { fDateTime } from "../../../utils/formatTime";
import { colors } from "../../../utils/colors";

type Props = {
  item: Term;
  onDelete: (id: number) => void;
}

export function TableItem({ item, onDelete }: Props) {
  return (
    <View style={styles.row}>
      <ButtonIcon color={colors.red600} onPress={() => onDelete(item.id)}>
        <Trash size={24} weight="bold" color={colors.white} />
      </ButtonIcon>

      <View style={{ width: 90 }}>
        <Text style={[styles.cell, { textAlign: "left" }]}>{item.description}</Text>
      </View>

      <View style={{ width: 100 }}>
        <Text style={[styles.cell, { textAlign: "right" }]}>{fDateTime(item.created_at)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
    alignItems: "center",
    marginVertical: 0,
    marginHorizontal: 0,
    borderBottomColor: colors.gray800,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  cellContainer: {
    width: 140,
  },
  cell: {
    fontSize: 12,
    color: colors.white,
    textTransform: "uppercase",
  }
})
