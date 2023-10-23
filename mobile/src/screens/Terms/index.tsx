import { useState, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import {
  SafeAreaView,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

// section
import { Table } from './sections/table';

// components
import { ButtonIcon } from '../../components/buttonIcon';
import { Input } from '../../components/input';
import { Header } from '../../components/header';
import { TermsNotFound } from '../../components/termsNotFound';

// api
import { api } from '../../utils/api';

// colors
import { colors } from '../../utils/colors';

// icons
import { Plus } from "phosphor-react-native";

// styles
import { styles } from './styles';

export function Terms() {
  const [terms, setTerms] = useState<Term[]>([]);
  const [termInput, setTermInput] = useState<string>("");

  async function handleCreate() {
    const result = await api.post("/terms", {
      description: termInput
    });

    setTermInput("");

    handleGetTerms();
  }

  async function handleGetTerms() {
    const response = await api.get("/terms");
    setTerms(response.data);
  }

  async function handleDelete(id: number) {
    const response = await api.delete(`/terms/${id}`);
    setTerms(response.data);

    handleGetTerms();
  }

  useFocusEffect(
    useCallback(() => {
      handleGetTerms();
    }, [])
  );

  return (
    <>
      <Header showBackButton showLogoutButton />

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <Text style={styles.title}>Termos</Text>

              <View style={styles.header}>
                <View style={styles.inputContainer}>
                  <Input
                    placeholder='Informe o termo desejado'
                    value={termInput}
                    onChangeText={setTermInput}
                  />
                </View>

                <ButtonIcon onPress={handleCreate}>
                  <Plus size={24} weight='bold' color={colors.white} />
                </ButtonIcon>
              </View>

              {
                terms.length == 0
                  ? <TermsNotFound />
                  : <Table data={terms} onDelete={handleDelete} />
              }
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}
