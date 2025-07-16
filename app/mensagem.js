import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Mensagem = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitIcon}
        onPress={() => router.push('/telamensagens')}
      >
          <Ionicons name="log-out-outline" size={28} color="#fff" />
           </TouchableOpacity>

      
      <Text style={styles.title}>Tela Mensagens</Text>
    </View>
  );
};

export default Mensagem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C1E94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  tabBar: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    backgroundColor: '#7B1790',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 1,
    borderTopWidth: 1,
    borderColor: '#fff',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
