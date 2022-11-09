import React, { FC, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {TProps} from '../types'

const Question: FC<TProps> = ({title, info}) => {
  const [showElem, setShowElem] = useState<boolean>(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowElem(!showElem)}>
          {
            showElem ? <AiOutlineMinus/> : <AiOutlinePlus/>
          }
        </button>
      </header>
      {
        showElem && <p>{info}</p>
      }
    </article>
  )
};

export default Question;
