import React, { FC, useState, useContext } from 'react';
import { IContext, IContextNode, TLocation, TPage, TCoordinate } from './types';

import sublinks from './data';

const AppContext = React.createContext<IContext>({} as IContext);

export const AppProvider: FC<IContextNode> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState<TLocation>({} as TLocation)
  const [page, setPage] = useState<TPage>({page: '', links: []})

  const openSubmenu = (text: string, coordinates: TCoordinate) => {
    const page = sublinks.find((item) => item.page === text)
    if(page) {
      setPage(page)
    }
    setLocation(coordinates)
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page
      }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
