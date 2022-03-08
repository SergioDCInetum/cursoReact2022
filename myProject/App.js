import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

// al añadir el botón y arrancar la aplicación, da una excepción
const Button = () => (
  <TouchableHighlight>
    <Text>Hello World</Text>
  </TouchableHighlight>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Práctica 1 y 2. Crear aplicación con un botón</Text>
      <Button/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
