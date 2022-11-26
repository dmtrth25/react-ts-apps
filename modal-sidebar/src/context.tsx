import React, { FC, ReactNode, useState, useContext } from 'react';

interface IContextNode {
  children?: ReactNode
}

interface IContext {
  isModalOpen: boolean
  isSidebarOpen: boolean 
  showModal: () => void
  showSidebar: () => void
  closeModal: () => void
  closeSidebar: () => void
}

export const AppContext = React.createContext<IContext>({} as IContext);

export const AppProvider: FC<IContextNode> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        showModal,
        showSidebar,
        closeModal,
        closeSidebar,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// custom context hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
