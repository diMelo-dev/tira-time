import { StyleSheet, Text, View } from 'react-native'
import { Touchable } from '../base'
import type { Player } from '@types'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AvailabilityIcon } from './AvailabilityIcon'

export type PlayerCardProps = {
  playerId: Player['id']
}

export const PlayerCard = (props: PlayerCardProps) => {
  return (
    <Touchable style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.leftContent}>
          <AvailabilityIcon />
        </View>

        <View style={styles.rightContent}>
          <View>
            <Text style={styles.name}>Danilo Melo</Text>

            <Text style={styles.position}>Atacante</Text>
          </View>

          <View style={styles.ratingWrapper}>
            <Text style={styles.ratingText}>{'5'}</Text>
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
