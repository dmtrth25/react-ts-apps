import React, { FC, useState } from 'react'
import SingleColor from './components/SingleColor'

import Values from 'values.js'

const App: FC = () => {
  const [color, setColor] = useState('')
  const [list, setList] = useState<Values[]>(new Values('#cd5409').all(10))
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='#cd32h2' 
            type="text" 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}  
          />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return <SingleColor 
              key={index} 
              {...color} 
              index={index} 
              hexColor={color.hex}/>
          })
        }
      </section>
    </>
  )
}

export default App
