import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={style.text}>Bienvenidos a mi APP!!</Text>
     

      <StatusBar style="auto" />
    </View>
  );
}
const style = StyleSheet.create({
  text:{
    fontSize: 30,
    color: '#FFFFFF',
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85C1E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
