import React, { FC, useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Submenu: FC = () => {
  const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext()
  const [columns, setColumns] = useState('col-2')
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const {center, bottom} = location
    if(submenu) {
      submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`

      if(links.length === 3) {
        setColumns('col-3')
      }

      if(links.length > 3) {
        setColumns('col-4')
      }

    }
  }, [location, links])

  return (
    <div ref={container} className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {
          links.map((link, index) => {
            const {label, icon, url} = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Submenu
