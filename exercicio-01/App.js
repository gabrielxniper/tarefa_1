import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  function mostrarAlerta() {
    Alert.alert("Nome digitado", nome);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Digite seu nome de usuário:</Text>

      <TextInput
        style={styles.caixa}
        placeholder="seu nome de usuário"
        placeholderTextColor="#807f7d"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.areaBotao}>
        <Button
          title="Mostrar alerta"
          onPress={mostrarAlerta}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', backgroundColor: '#292626', padding: 20 
  },
  paragraph: { 
    color: "#f5f5ed", marginBottom: 10, fontSize: 18, fontWeight: 'bold', textAlign: 'center' 
  },
  caixa: { 
    backgroundColor: "#171616", marginBottom: 20, fontSize: 18, color: "yellow", textAlign: 'center', borderRadius: 10, padding: 15 
  },
  areaBotao: { 
    borderRadius: 10, overflow: 'hidden' 
  }
});