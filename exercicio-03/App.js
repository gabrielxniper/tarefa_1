import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';

export default function App() {

  const [itens, setItens] = useState([]);
  const [texto, setTexto] = useState('');


  function addItem() {
    if(texto.trim() == ("")){
      Alert.alert("Digite o nome de um item para poder adicioná-lo!");
      return
    }
    setItens([...itens, texto]);
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        placeholderTextColor="#ffffff"
        value={texto}
        onChangeText={setTexto}
      />

      <View style={styles.botao}>
        <Button
          title="Adicionar Item"
          color="#d62822"
          onPress={addItem}
        />
      </View>

      <ScrollView style={styles.listaContainer}>
        {itens.map((item, index) => (
          <View key={index} style={styles.itemLista}>
            <Text style={styles.textoItem}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    padding: 20,
    paddingTop: 30,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#171616",
    color: "#d62822",
    fontSize: 18,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  botao: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  listaContainer: {
    flex: 1,
    backgroundColor: "#171616",
    borderRadius: 30,
    padding: 10,
  },
  itemLista: {
    backgroundColor: "#0d0c0c",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  textoItem: {
    color: "#d62822",
    fontSize: 16,
  }
});