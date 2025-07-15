import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/onda-1.png')} 
      styles={styles.logo}     
      />
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
      />
      <View style={styles.socialContainer}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
      </View> 
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Não tem conta? <Text style={styles.underline}>CADASTRAR</Text>
      </Text>
      <Text style={[styles.link, styles.underline]}>Esqueceu a senha?</Text>
      <Image source={require('../assets/onda-2.png')}
      styles={styles.logo}     
      />
    </View>
  );
};

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
socialContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},
socialIcon: {
  width: 27,
  height: 27,
  marginHorizontal: 5,
},
});

export default LotsOfStyles;

