import { View, StyleSheet, FlatList } from 'react-native'
import { Header, ListSeparator, PlayerCard } from '@components'
import { players } from '@utils'
import type { Player } from '@types'
import Constants from 'expo-constants'

export const Players = () => {
  const renderItem = ({ item }: { item: Player }) => <PlayerCard playerId={item.id} />

  const separator = () => <ListSeparator height={8} />

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={players} renderItem={renderItem} ItemSeparatorComponent={separator} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Constants.statusBarHeight + 34,
    paddingBottom: 24,
  },
  list: {
    borderWidth: 1,
    display: 'flex',
    gap: 4,
  },
})
