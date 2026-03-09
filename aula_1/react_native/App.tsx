import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button, 
  SafeAreaView, 
  Text,
  Animated 
} from 'react-native';

const App = () => {
  const [texto, setTexto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [visivel, setVisivel] = useState(false);

  const mostrarNotificacao = () => {
    if (texto.trim() === '') return;

    setMensagem(texto);
    setVisivel(true);
    setTexto('');

    setTimeout(() => {
      setVisivel(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {visivel && (
        <View style={styles.notification}>
          <Text style={styles.notificationText}>{mensagem}</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>Minha Notificação</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Escreva algo..."
          value={texto}
          onChangeText={setTexto}
        />

        <Button 
          title="Exibir Notificação" 
          onPress={mostrarNotificacao} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  notification: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  notificationText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default App;
