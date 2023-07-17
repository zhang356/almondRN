import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text>Ask</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text>Answer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly'
  },

  button: {
    backgroundColor: 'aliceBlue',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  }
});
