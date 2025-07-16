import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Inicio = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
     <View style={styles.topIconsContainer}>
  <TouchableOpacity
    style={styles.iconButton}
    onPress={() => router.push('/inicio')}
  >
    <AntDesign name="arrowleft" size={28} color="#fff" />
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.iconButton}
    onPress={() => router.push('/editarperfil')}
  >
    <Ionicons name="settings-outline" size={28} color="#fff" />
  </TouchableOpacity>
</View>
      
      <Text style={styles.title}>Perfil</Text>

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
          onPress={() => router.push('/teladojogo')}
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

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C1E94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIconsContainer: {
  position: 'absolute',
  top: 50,
  left: 0,
  right: 0,
  paddingHorizontal: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  zIndex: 1,
},
iconButton: {

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
