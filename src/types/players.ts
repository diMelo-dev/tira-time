
export type Position = 'GK' | 'Winger' | 'ST'

export type Player = {
  id: string,
  name: string,
  rate: number,
  position: Position
}
