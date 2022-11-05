import React, { useState } from 'react';
import List from './components/List';
import data from './data';

const App = () => {
  const [person, setPerson] = useState(data)

  if(person.length === 0) {
    return (
      <main>
        <div>
          <h2>No items</h2>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>  
      </main>
    )
  }
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
