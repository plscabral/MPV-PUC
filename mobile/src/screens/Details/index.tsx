import * as WebBrowser from 'expo-web-browser';
import { useRoute } from "@react-navigation/native";

import {
  Share,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

// components
import { Header } from "../../components/header";

// utils
import { styles } from "./styles";


type RoutePrams = {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export function Details() {
  const route = useRoute();
  const { title, url, content, publishedAt, urlToImage } = route.params as RoutePrams;

  async function handleCodeShare() {
    await Share.share({
      message: url
    })
  }

  async function openBrowser() {
    await WebBrowser.openBrowserAsync(url);
  }

  return (
    <>
      <Header showBackButton showShareButton onShare={handleCodeShare} />

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.main}>
            <Image
              style={styles.thumb}
              source={{ uri: urlToImage }}
            />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>

            <TouchableOpacity style={styles.redirectArticleButton} onPress={openBrowser}>
              <Text style={styles.redirectArticleText}>Visualizar Artigo</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}
