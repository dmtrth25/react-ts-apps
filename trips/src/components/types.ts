export interface IElements {
  id: string,
  name: string,
  info: string,
  image: string,
  price: string,
  removeItem?: (id: string) => void
}

export interface IProps {
  tours: IElements[]
  removeItem?: (id: string) => void
}