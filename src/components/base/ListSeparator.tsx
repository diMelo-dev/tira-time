import { View, StyleSheet } from 'react-native'

type ListSeparatorProps = {
  height: number
}

export const ListSeparator = (props: ListSeparatorProps) => {
  const { height } = props
  const styleHeight = {
    height,
  }

  return <View style={[styles.container, styleHeight]}></View>
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
