import { StyleSheet, Text, View } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';

export default function App() {
  return (
    <View style={styles.container}>
      <SystemBars style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
