import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Players } from '@scenes'

export default function App() {
  return (
    <View style={styles.container}>
      <Players />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
