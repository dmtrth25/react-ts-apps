import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { social, links } from '../data'

const Sidebar: FC = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes/>
        </button>
      </div>
      <ul className="links">
        {
          links.map((link) => {
            const {id, url, text, icon} = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon}{text}
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul className="social-icons">
        {
          social.map((item) => {
            const {id, url, icon} = item
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar
