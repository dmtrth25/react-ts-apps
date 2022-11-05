import React, {FC} from 'react';
import { IProps } from '../types';
import Tour from './Tour';

const Tours: FC<IProps> = ({ tours, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {
          tours.map(tour => <Tour key={tour.id} {...tour} removeItem={removeItem}/>)
        }
      </div>
    </section>
  )
};

export default Tours;
