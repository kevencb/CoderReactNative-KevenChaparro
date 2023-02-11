import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ¡Hola Coder House {"\n"} soy Keven Chaparro!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '32px',
    color: '#E94560'
  }
});
