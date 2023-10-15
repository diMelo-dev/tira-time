import { View, StyleSheet, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Touchable } from '@components/base'

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.title}>Jogadores</Text>
        <Text style={styles.subtitle}>Fut de Domingo</Text>
      </View>

      <Touchable>
        <Ionicons name="add-outline" size={60} />
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headline: {
    display: 'flex',
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
  },
})
