import { StyleSheet, Text, View } from "react-native"
import { Touchable } from './base'
import type { Player } from "@types"

export type PlayerCardProps = {
  playerId: Player['id']
}

export const PlayerCard = (props: PlayerCardProps) => {

  return (
    <Touchable style={styles.wrapper}>
      <View>
        <View>
          <View>
            <Text>Danilo Melo</Text>
          </View>

          <View>
            <Text>Atacante</Text>
          </View>
        </View>

        <View>
        </View>

      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
  },
})
