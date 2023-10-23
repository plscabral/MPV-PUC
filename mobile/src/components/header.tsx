import { View, Image, StyleSheet } from "react-native";

// @react-navigation
import { useNavigation } from '@react-navigation/native'

// components
import { EmptyBoxSpace } from "./emptyBoxSpace";

// colors
import { colors } from "../utils/colors";

// icons
import { SignOut, ArrowLeft, Export } from "phosphor-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../hooks/useAuth";

// ------------------------------------------------------------------------

type Props = {
  showLogoutButton?: boolean;
  showBackButton?: boolean;
  showShareButton?: boolean;
  onShare?: () => void;
}

// ------------------------------------------------------------------------

export function Header({
  showLogoutButton = false,
  showBackButton = false,
  showShareButton = false,
  onShare
}: Props) {
  const { handleLogout } = useAuth();
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {
          showBackButton
            ? (
              <TouchableOpacity onPress={goBack}>
                <ArrowLeft size={28} color={colors.blue500} />
              </TouchableOpacity>
            )
            : <EmptyBoxSpace />
        }

        <Image source={require("../assets/logo.png")} />

        {
          showLogoutButton || showShareButton
            ? (
              showLogoutButton ? (
                <TouchableOpacity onPress={handleLogout}>
                  <SignOut size={28} color={colors.red600} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onShare}>
                  <Export size={28} color={colors.blue500} />
                </TouchableOpacity>
              )
            )
            : <EmptyBoxSpace />
        }
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue950,
    height: 120
  },
  main: {
    flexDirection: "row",
    paddingHorizontal: 15,
    width: "100%",
    height: 170,
    justifyContent: "space-between",
    alignItems: "center",
  }
})
