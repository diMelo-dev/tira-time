import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ListSeparator, PlayerCard } from '@components'
import { players } from '@utils'
import type { Player } from '@types'

export const PlayersList = () => {
  const renderItem = ({ item }: { item: Player }) => <PlayerCard playerId={item.id} />

  const separator = () => <ListSeparator height={4} />

  return (
    <View style={styles.container}>
      <Text>Essa é a lista</Text>
      <FlatList data={players} renderItem={renderItem} ItemSeparatorComponent={separator} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  list: {
    borderWidth: 1,
    display: 'flex',
    gap: 4,
  },
})
