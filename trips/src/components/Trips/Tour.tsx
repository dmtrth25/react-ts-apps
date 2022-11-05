import React, { FC, useState } from 'react';
import { IElements } from '../types';

const Tour: FC<IElements> = ({id, image, info, price, name, removeItem}) => {
  const [readMore, setReadMore] = useState<boolean>(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>{price} $</h4>
        </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}`}
            <button 
              onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button 
            className="delete-btn" 
            onClick={() => removeItem ? removeItem(id) : null}>
            not interested
          </button>
      </footer>
    </article>
  )
};

export default Tour;
