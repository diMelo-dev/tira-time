import { StyleSheet, Text, View } from 'react-native'
import { Touchable } from '../base'
import type { Player } from '@types'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AvailabilityIcon } from './AvailabilityIcon'
import { players } from '@utils'

export type PlayerCardProps = {
  playerId: Player['id']
}

export const PlayerCard = (props: PlayerCardProps) => {
  const { playerId } = props
  const player = players.find((player) => player.id === playerId)

  if (player == null) return null

  return (
    <Touchable style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.leftContent}>
          <AvailabilityIcon />
        </View>

        <View style={styles.rightContent}>
          <View>
            <Text style={styles.name}>{player.name}</Text>

            <Text style={styles.position}>{player.name}</Text>
          </View>

          <View style={styles.ratingWrapper}>
            <Text style={styles.ratingText}>{player.rate}</Text>
            <Ionicons name="star" size={30} />
          </View>
        </View>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContent: {
    marginRight: 8,
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
  },
  position: {
    fontSize: 12,
    fontWeight: '400',
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 28,
    fontWeight: '700',
  },
})
