import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TelaMensagens() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/inicio')}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Chat</Text>

      {/* Abas */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabTextActive}>Mensagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabInactive}>
          <Text style={styles.tabTextInactive}>Suporte</Text>
        </TouchableOpacity>
      </View>

      {/* Cartões de Mensagens */}
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

        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>Lucas Silva</Text>
            <Text style={styles.cardMessage}>vai ser tranquilo.</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.counter}>1</Text>
            <Text style={styles.time}>10:50</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>Léo</Text>
            <Text style={styles.cardMessage}>VRK ganha suave</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.counter}>4</Text>
            <Text style={styles.time}>9:30</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
