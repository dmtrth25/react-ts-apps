import React, { FC } from 'react';
import { IValueProps } from '../types';

const List: FC<IValueProps> = (props) => {
  return (
    <>
      {
        props.value.map(item => {
          const {id, age, image, name} = item
          return (
            <article key={id} className='person'>
              <img src={image} alt="Image" />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          )
        })
      }
    </>
  );
};

export default List;
