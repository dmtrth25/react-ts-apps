import React, { FC } from 'react';
import { TFilter } from '../types';

const Categories: FC<TFilter> = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
      {
        categories.map((category: string, index: number) => (
          <button
            key={index} 
            type='button'
            className='filter-btn' 
            onClick={() => filterItems(category)}>
            {category}
          </button>
        ))
      }
    </div>
  )
};

export default Categories;
