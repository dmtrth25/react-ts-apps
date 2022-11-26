import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Home: FC = () => {
  const { showSidebar, showModal} = useGlobalContext()
  return (
      <main>
        <button className="sidebar-toggle" onClick={showSidebar}>
          <FaBars/>
        </button>
        <button className="btn" onClick={showModal}>
          show modal
        </button>
      </main>
  )
}

export default Home
