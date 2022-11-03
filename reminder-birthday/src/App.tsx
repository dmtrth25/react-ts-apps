import React, { useState } from 'react';
import data from './data';
import List from './components/List';

const App = () => {
  const [person, setPerson] = useState(data)
  return (
    <main>
      <section className='container' >
          <h3>{person.length} elements</h3>
          <List value={person}/>
          <button onClick={() => setPerson([])}>clear</button>
      </section>
    </main>
  )
}

export default App;
