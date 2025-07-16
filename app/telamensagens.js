import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TelaMensagens= () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/inicio')}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Chat</Text>

      <View style={styles.cardsArea}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/mensagem')}>
          <View>
            <Text style={styles.cardTitle}>Thomas</Text>
            <Text style={styles.cardMessage}>Não sei, será que a Pain ganha hoje?</Text>
          </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/mensagem')}>
          <View>
            <Text style={styles.cardTitle}>Lucas Silva</Text>
            <Text style={styles.cardMessage}>vai ser tranquilo.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/mensagem')}>
          <View>
            <Text style={styles.cardTitle}>Léo</Text>
            <Text style={styles.cardMessage}>VRK ganha suave</Text>
          </View>
        </TouchableOpacity>
      </View>
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
          <Text style={styles.tabText}>Competição</Text>
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
export default TelaMensagens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C1E94',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardsArea: {
    flex: 1,
  },
  card: {
    backgroundColor: '#BF69D9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardMessage: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  counter: {
    backgroundColor: '#9C1E94',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    fontSize: 12,
    marginBottom: 5,
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
