export interface IElemProps {
  id: number
  title: string
  category: string
  price: number
  img: string
  desc: string
}

export type TFilter = {
  categories: string[]
  filterItems: (category: string) => void
}

export type TProps = {
  items: IElemProps[]
}