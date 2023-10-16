import type { Player } from '@types'
import { retrievePlayers } from '@utils/storage'
import { useEffect, useState } from 'react'

export const useRetrievePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await retrievePlayers()
      if (response !== null && response !== undefined) setPlayers(response)
    }
    fetchData().catch(console.error)
  }, [])

  return {
    players,
  }
}
