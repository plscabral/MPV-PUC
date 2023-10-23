import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  FlatList,
} from 'react-native';

// components
import { Header } from '../../components/header';
import { TermsNotFound } from '../../components/termsNotFound';

// sections
import { CategoryButton } from './sections/category-button';
import { Article } from './sections/article';

// api
import { api } from '../../utils/api';

// styles
import { styles } from './styles';

export function Feed() {
  const { navigate } = useNavigation();
  const [terms, setTerms] = useState<Term[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [categorySelected, setCategorySelected] = useState(1);

  async function handleGetTerms() {
    const response = await api.get("/terms");

    setTerms(response.data);
    const term = response.data.find(x => x.id === categorySelected)?.description;
    handleGetArticles(term);
  }

  async function handleGetArticles(term: string) {
    if (term === "" || term === undefined) {
      return;
    }

    await fetch(
      `https://newsapi.org/v2/everything?q=${term}&sortBy=publishedAt&apiKey=61df58bb879f4cf7af74faa8e4905736&language=pt&pageSize=10`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        setArticles(responseData.articles?.filter(x => x.title !== "[Removed]" && x.title !== null));
      });
  }

  async function handleCategorySelected(id: number) {
    setCategorySelected(id);
    const term = terms.find(x => x.id === id)?.description;
    await handleGetArticles(term);
  }

  function handleDetails(item: Article) {
    navigate('details', {
      title: item.title,
      url: item.url,
      urlToImage: item.urlToImage,
      publishedAt: item.publishedAt,
      content: item.content
    })
  }

  useFocusEffect(
    useCallback(() => {
      handleGetTerms();
    }, [])
  );

  return (
    <>
      <Header showLogoutButton />

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.title}>Feed de notíciais</Text>
          {
            terms.length == 0
              ? <TermsNotFound />
              : (
                <>
                  <View>
                    <FlatList data={terms} keyExtractor={(item) => String(item.id)}
                      renderItem={({ item }) => (
                        <CategoryButton
                          title={item.description}
                          active={item.id == categorySelected}
                          onPress={() => handleCategorySelected(item.id)}
                        />
                      )}
                      horizontal showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.categoryList}
                    />
                  </View>

                  <View style={styles.articleContainer}>
                    <FlatList
                      data={articles}
                      keyExtractor={(item, index) => String(item.title)}
                      showsVerticalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <Article
                          item={item}
                          onPress={() => handleDetails(item)}
                        />
                      )}
                      contentContainerStyle={styles.articleList}
                    />
                  </View>
                </>
              )
          }
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}
