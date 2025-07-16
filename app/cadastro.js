import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function Cadastro() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#fff"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/inicio')} // Navega para tela inicial após cadastro
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Já tem conta?{' '}
        <Text
          style={styles.underline}
          onPress={() => router.push('/login')} >
          Entrar
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C1E94',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
