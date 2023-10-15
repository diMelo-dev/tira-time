import { View, Text, StyleSheet } from 'react-native'
import { PlayerCard } from '@components'
import { players } from '@utils'

export const PlayersList = () => {
  return (
    <View style={styles.container}>
      <Text>Essa é a lista</Text>
      {players.map((player, index) => (
        <PlayerCard key={player.id} playerId={player.id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
