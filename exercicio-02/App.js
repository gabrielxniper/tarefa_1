import { StyleSheet, View, ScrollView, Image } from 'react-native';

const img1 = require('./assets/img1.png');
const img2 = require('./assets/img2.png');
const img3 = require('./assets/img3.png');
const img4 = require('./assets/img4.png');
const img5 = require('./assets/img5.png');
const img6 = require('./assets/img6.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Image source={img1} style={styles.imagem} />
        <Image source={img2} style={styles.imagem} />
        <Image source={img3} style={styles.imagem} />
        <Image source={img4} style={styles.imagem} />
        <Image source={img5} style={styles.imagem} />
        <Image source={img6} style={styles.imagem} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c73447',
    paddingTop: 37,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  imagem: {
    width: 320,  
    height: 300, 
    marginBottom: 20,
    borderRadius: 30,
  },
});