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

// hooks
import { useAuth } from '../../hooks/useAuth';

// styles
import { styles } from './styles';

export function SignIn({ navigation }) {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
                Entre com sua conta para continuar
              </Text>
            </View>

            <View style={styles.form}>
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

              {/* <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={() => navigation.push("SignUp")}
              >
                <Text style={styles.forgotPasswordText}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity> */}

              <Button
                text='Entrar'
                onPress={() => handleLogin(email, password)}
              />

              <TouchableOpacity
                style={styles.signUpContainer}
                onPress={() => navigation.push("SignUp")}
              >
                <Text style={styles.signUpText}>
                  Criar conta
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

