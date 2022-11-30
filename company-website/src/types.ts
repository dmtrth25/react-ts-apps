import { ReactNode } from "react"

export type TPage = {
  page: string;
  links: {
      label: string;
      icon: JSX.Element;
      url: string;
  }[];
}

export interface IContext {
  isSidebarOpen: boolean
  isSubmenuOpen: boolean
  openSubmenu: (text: string, coordinates: TCoordinate) => void
  closeSubmenu: () => void
  openSidebar: () => void
  closeSidebar: () => void
  location: TLocation;
  page: TPage
}


export type IContextNode = {
  children?: ReactNode
}

export type TLocation = {
  center: number
  bottom: number
}

export type TCoordinate = {
  center: number
  bottom: number
}