import { Pressable } from "react-native"
import type { PressableAndroidRippleConfig } from "react-native"

export type TouchableProps = {
  children: React.JSX.Element
}

export const Touchable = (props: TouchableProps) => {

  const { 
    children,
   } = props

  return (
    <Pressable android_ripple={rippleConfig}>
      {children}
    </Pressable>
  )
}

const rippleConfig: PressableAndroidRippleConfig = {
  color: '#000001A',
}
