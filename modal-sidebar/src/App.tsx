import React, { FC } from 'react'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App: FC = () => {
  return (
    <>
      <Home/>
      <Modal/>
      <Sidebar/>
    </>
  )
}

export default App
