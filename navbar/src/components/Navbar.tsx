import React, { FC, useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from '../data'
import Social from './Social'

const Navbar: FC = () => {
  const [show, setShow] = useState(false)
  const linksContainerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const heightLinks = linksRef.current?.getBoundingClientRect().height
    if(show) {
      if(linksContainerRef.current) {
        linksContainerRef.current.style.height = `${heightLinks}px`
      }
    } else {
      if(linksContainerRef.current) {
        linksContainerRef.current.style.height = '0px'
      }
    }
  }, [show])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button onClick={() => setShow(!show)} className="nav-toggle">
            <FaBars/>
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {
              links.map((link) => {
                const {id, url, text} = link
                return (
                  <li key={id}>
                    <a href={url}>
                      {text}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Social/>
      </div>
    </nav>
  )
}

export default Navbar
