import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TelaMensagens() {
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
          <View style={styles.rightInfo}>
            <Text style={styles.counter}>7</Text>
            <Text style={styles.time}>7:10</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/mensagem')}>
          <View>
            <Text style={styles.cardTitle}>Lucas Silva</Text>
            <Text style={styles.cardMessage}>vai ser tranquilo.</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.counter}>10</Text>
            <Text style={styles.time}>10:50</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/mensagem')}>
          <View>
            <Text style={styles.cardTitle}>Léo</Text>
            <Text style={styles.cardMessage}>VRK ganha suave</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.counter}>9</Text>
            <Text style={styles.time}>9:30</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Barra de navegação inferior */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/inicio')}>
          <Ionicons name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/inscricao')}>
          <Ionicons name="person-add-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/teladojogo')}>
          <Ionicons name="game-controller-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/teladeperfil')}>
          <Ionicons name="person-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/telamensagens')}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
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
  rightInfo: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  counter: {
    backgroundColor: '#9C1E94',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    fontSize: 12,
    marginBottom: 5,
  },
  time: {
    color: '#fff',
    fontSize: 12,
  },
  tabBar: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    backgroundColor: '#7B1790',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#fff',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
