import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Competicao = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/inicio')}>
              <Ionicons name="arrow-back-outline" size={28} color="#fff" />
            </TouchableOpacity>
      <Text style={styles.title}>Escolha uma competição</Text>

        <Image source={require('../assets/posterlol.png')} style={styles.socialIcon} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Competição 5x5</Text>
        <Text style={styles.subText}>Summoner's Rift</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Competição 5x5</Text>
        <Text style={styles.subText}>Aram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Competição 1x1</Text>
        <Text style={styles.subText}>Aram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Competição 1x1</Text>
        <Text style={styles.subText}>Summoner's Rift</Text>
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

export default Competicao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C1E94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
    button: {
    backgroundColor: '#7B1790',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSub: {
    color: '#ddd',
    fontSize: 12,
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
