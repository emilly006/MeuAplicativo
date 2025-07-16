import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Tela de mensagens </Text>
     <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>Chat</Text>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
})
export default LotsOfStyles;

