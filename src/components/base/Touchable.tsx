import { Pressable } from 'react-native'
import type { PressableAndroidRippleConfig, StyleProp, ViewStyle } from 'react-native'
import type { AnyFunction } from '@types'

export type TouchableProps = {
  children: React.JSX.Element
  style?: StyleProp<ViewStyle>
  onPress: AnyFunction
}

export const Touchable = (props: TouchableProps) => {
  const { children, ...rest } = props

  return (
    <Pressable {...rest} android_ripple={rippleConfig}>
      {children}
    </Pressable>
  )
}

const rippleConfig: PressableAndroidRippleConfig = {
  color: '#000001A',
}
