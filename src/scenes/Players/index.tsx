import { View, StyleSheet, FlatList, Button, Text } from 'react-native'
import { Header, ListSeparator, PlayerCard } from '@components'
import type { Player } from '@types'
import Constants from 'expo-constants'
import { useRetrievePlayers } from '@utils'
import { useEffect, useState } from 'react'

const PLAYER_EXAMPLE: Player = {
  id: '1',
  name: 'Melo',
  position: 'ST',
  rate: 5,
}

export const Players = () => {
  const { players: _players } = useRetrievePlayers()
  const [players, setPlayers] = useState<Player[]>([])

  // console.log('_PLAYERS: ', _players)

  const renderItem = ({ item }: { item: Player }) => <PlayerCard playerId={item.id} />

  const separator = () => <ListSeparator height={8} />

  useEffect(() => {
    setPlayers(_players)
    setTimeout(() => {
      console.log('players', players)
    }, 2000)
  }, [_players])

  return (
    <View style={styles.container}>
      <Header />
      <Button onPress={() => setPlayers([PLAYER_EXAMPLE])} title="Teste" />
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
