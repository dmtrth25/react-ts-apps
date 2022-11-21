export type TList = { 
  id: string
  title: string
}

export type TItems = {
  show: boolean
  msg: string
  type: string
  removeAlert?: () => void
  list?: TList[]
}

export type TProps = {
  items: TList[]
  removeItem: (id: string) => void
  editItem: (id: string) => void
}