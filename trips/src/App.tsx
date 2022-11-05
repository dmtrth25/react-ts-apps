import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'

import Tours from './components/Trips/Tours'
import { IElements } from './components/types'
import axios from 'axios'

const App = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [tours, setTours] = useState<IElements[]>([])

  const fetchItems = async () => {
    setLoading(true)
    try {
      const {data} = await axios.get('https://course-api.com/react-tours-project')
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  const removeItem = (id: string) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }
  
  useEffect(() => {
    fetchItems()
  }, [])

  if(loading) {
    return (
      <main>
        <h2><Loading/></h2>
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchItems}>refresh</button>
        </div>  
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeItem={removeItem}/>
    </main>
  )
}

export default App
