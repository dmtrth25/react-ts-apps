import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

import logo from '../images/logo.svg'

const Navbar: FC = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()

  const displaySubmenu = (e: React.MouseEvent) => {
    const node = e.target as HTMLElement;
    const page = node.textContent
    const tempBtn = node.getBoundingClientRect()
    
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page as string, {center, bottom})
  }

  const handleSubmenu = (e: React.MouseEvent) => {
    const node = e.target as HTMLElement
    if(!node.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='nav-logo' />
          <button className="btn toggle-btn" onClick={openSidebar}><FaBars/></button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
