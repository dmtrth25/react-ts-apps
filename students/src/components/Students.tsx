import React, { FC, useState } from 'react';
import people from '../data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Students: FC = () => {
  const [index, setIndex] = useState<number>(0)
  const {name, job, image, text} = people[index]

  const checkItems = (num: number) => {
    if(num > people.length - 1) {
      return 0
    }

    if(num < 0) {
      return people.length - 1
    }
    
    return num
  }

  const prevItem = () => {
    setIndex((index: number) => {
      const newItem = index - 1
      return checkItems(newItem)
    })
  }

  const nextItem = () => {
    setIndex((item: number) => {
      const newItem = item + 1
      return checkItems(newItem)
    })
  }

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length)
    if(randomNum === index) {
      randomNum = index + 1
    }
    setIndex(checkItems(randomNum))
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevItem}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextItem}>
          <FaChevronRight/>
        </button>
      </div>
        <button className='random-btn' onClick={randomPerson}>random</button>
    </article>
  )
};

export default Students;
