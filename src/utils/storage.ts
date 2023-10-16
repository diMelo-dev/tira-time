import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Player } from '@types'

export const storePlayer = async (data: Player) => {
  try {
    const players = await retrievePlayers()
    if (players != null) {
      players.push(data)
      await AsyncStorage.setItem('PLAYERS', JSON.stringify(players))
    } else {
      await AsyncStorage.setItem('PLAYERS', JSON.stringify(data))
    }
  } catch (e) {
    console.log('Error while storing a Player ->', e)
  }
}

export const retrievePlayers = async () => {
  try {
    const _players = await AsyncStorage.getItem('PLAYERS')
    if (_players !== null) {
      const players: Player[] = JSON.parse(_players)
      return players
    }
    return null
  } catch (e) {
    console.log('Error while retrieving the list of Players ->', e)
  }
}
