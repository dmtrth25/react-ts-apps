import React, { FC, useState } from 'react';
import SingleQuestion from './components/Question';
import { TProps } from './types';
import elements from './data';

const App: FC = () => {
  const [questions, setQuestions] = useState<TProps[]>(elements)
  return (
    <main>
      <div className="container">
        <h3>React accordion</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App;
