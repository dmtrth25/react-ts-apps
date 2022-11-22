import React, { FC } from 'react'
import { social } from '../data'

const Social: FC = () => {
  return (
    <ul className="social-icons">
    {
      social.map((item) => {
        const {id, url, icon} = item
        return (
          <li key={id}>
            <a target='_blank' href={url}>{icon}</a>
          </li>
        )
      })
    }
  </ul>
  )
}

export default Social