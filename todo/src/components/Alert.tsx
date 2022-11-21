import React, { FC, useEffect } from 'react'
import { TItems } from '../types'

const Alert: FC<TItems> = ({type, msg, removeAlert, list}) => {
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      removeAlert && removeAlert() // If we don't pass anything in fn -> we have default value for show - false
    }, 3000)

    return () => {
      clearTimeout(alertTimeout)
    }
  }, [list])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
