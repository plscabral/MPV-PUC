import { View, Image, Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

// utils
import { colors } from '../../../utils/colors';

type Props = {
  item: Article;
} & TouchableOpacityProps;

export function Article({ item, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View>
        <Image
          style={styles.thumb}
          source={{ uri: item.urlToImage }}
        />
      </View>

      <View style={{ width: 200 }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#090f1f",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between"
  },
  thumb: {
    width: 130,
    height: 80,
    borderRadius: 8
  },
  title: {
    color: colors.white,
    textAlign: 'left'
  }
});
