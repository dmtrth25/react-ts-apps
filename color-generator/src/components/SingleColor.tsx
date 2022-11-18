import React, { FC, useState, useEffect } from 'react'
import rgbToHex from '../utils'
import { TProps } from './types'

const SingleColor: FC<TProps> = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)

  const clr = rgb.join(',')
  const hexValue = `#${hexColor}`

  const hex = rgbToHex(...rgb) // we can use a fn - another way to create hex color

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
      
      return () => {
        clearTimeout(timeout)
      }
    }, 2000);
  }, [alert])

  return (
    <article 
      className={`color ${index > 10 && 'color-light'}` } 
      style={{backgroundColor: `rgb(${clr})`}}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {
        alert && <p className='alert'>copied to clipboard</p>
      }
    </article>
  )                                          
}

export default SingleColor
