import { useState } from 'react';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

// components
import { Input } from '../../components/input';
import { Button } from '../../components/button';

// styles
import { styles } from './styles';
import { api } from '../../utils/api';

export function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    const result = await api.post("/users", {
      name,
      email,
      password
    });

    navigation.push("SignIn")
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <View style={styles.titleContainer}>
              <Image source={require("../../assets/logo.png")} />

              <Text style={styles.title}>
                Preencha os dados abaixo:
              </Text>
            </View>

            <View style={styles.form}>
              <Input
                placeholder='Nome'
                value={name}
                onChangeText={setName}
              />

              <Input
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
              />

              <Input
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
              />

              <Button
                text='Cadastrar'
                onPress={handleSignUp}
              />

              <TouchableOpacity
                style={styles.backContainer}
                onPress={() => navigation.push("SignIn")}
              >
                <Text style={styles.backText}>
                  Voltar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

