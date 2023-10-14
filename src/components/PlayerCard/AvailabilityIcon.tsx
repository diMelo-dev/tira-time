import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

export const AvailabilityIcon = () => {
  const [available, setAvailable] = useState(false)

  const iconProps = available
    ? {
        name: 'chevron-down-circle',
        color: 'green',
      }
    : {
        name: 'close-circle-outline',
        color: 'red',
      }

  return <Ionicons {...iconProps} size={35} onPress={() => setAvailable(!available)} />
}
