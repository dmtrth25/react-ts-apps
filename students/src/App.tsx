import React, { FC } from 'react';
import Students from './components/Students';

const App: FC = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our students</h2>
          <div className="underline"></div>
        </div>
      <Students/>
      </section>
    </main>
  )
}

export default App;
