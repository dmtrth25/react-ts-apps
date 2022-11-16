import React, { FC, useState } from 'react';
import data from './data';

const App: FC = () => {
  const [count, setCount] = useState('')
  const [text, setText] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let amount = parseInt(count)
    if(amount <= 0) amount = 1
    if(amount > 8) amount = 8

    setText(data.slice(0, amount))
  }
   
  return (
    <section className="section-center">
      <h3>Paragraphs</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input 
          type="number" 
          name='amount' 
          id='amount' 
          value={count} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(e.target.value)} 
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
