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
        <View>
          <View>
            <Text style={styles.name}>Danilo Melo</Text>
          </View>

          <View>
            <Text style={styles.position}>Atacante</Text>
          </View>
        </View>

        <View>
          <View>
            <Ionicons name="star-outline" size={30} />
          </View>
          <AvailabilityIcon />
        </View>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderWidth: 1,
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
  },
  position: {
    fontSize: 12,
    fontWeight: '400',
  },
})
