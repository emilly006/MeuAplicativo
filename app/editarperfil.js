import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EditarPerfil= () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitIcon}
        onPress={() => router.push('/teladeperfil')}
      >
        <Ionicons name="log-out-outline" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Editar Perfil</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/teladeperfil')}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        Alert.alert('Sucesso', 'Perfil salvo com sucesso!');
        router.push('/teladeperfil');
       }}
      >
      <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>



      <View style={styles.tabBar}>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push('/inscricao')}
        >
          <Ionicons name="person-add-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Inscrição</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push('/teladeperfil')}
        >
          <Ionicons name="person-circle-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push('/competicao')}
        >
          <Ionicons name="game-controller-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Jogos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push('/telamensagens')}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Mensagens</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditarPerfil;

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
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
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
