import { Ionicons } from '@expo/vector-icons'; // biblioteca de ícones
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Inicio = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Botão sair no topo */}
      <TouchableOpacity
        style={styles.exitIcon}
        onPress={() => router.push('/login')}
      >
        <Ionicons name="log-out-outline" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Título central */}
      <Text style={styles.title}>Tela de Início</Text>

      {/* Conteúdo da tela (pode adicionar mais coisas aqui) */}

      {/* Tabs fixas no rodapé */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push('/pagamento')}
        >
          <Ionicons name="card-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Pagamento</Text>
        </TouchableOpacity>

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
    bottom: 0,
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
  tabText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
