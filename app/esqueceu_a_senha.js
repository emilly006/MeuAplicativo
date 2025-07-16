import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const EsqueceuSenha = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Tela Esqueceu a senha</Text>
     <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    </View>
  );
};
export default EsqueceuSenha;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColr: '#9C1E94',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
})

