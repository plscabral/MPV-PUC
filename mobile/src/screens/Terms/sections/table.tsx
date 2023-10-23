import { View, Text, FlatList, StyleSheet } from "react-native";
import { TableItem } from "./table-item";

// utils
import { colors } from "../../../utils/colors";

type Props = {
  data: Term[]
  onDelete: (id: number) => void;
}

export function Table({ data, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}></Text>
        <Text style={styles.heading}>TERMO</Text>
        <Text style={styles.heading}>DATA CADASTRO</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={x => (
          <TableItem
            item={x.item}
            onDelete={() => onDelete(x.item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    marginTop: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: colors.gray800,
    borderBottomWidth: 1
  },
  heading: {
    flex: 1,
    fontSize: 13,
    color: colors.gray800,
  }
});
