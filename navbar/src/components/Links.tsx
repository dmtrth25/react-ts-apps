import React, { FC, useRef } from 'react'
import { links } from '../data'

const Links: FC = () => {
  const linksContainerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)
  
  return (
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
  )
}

export default Links