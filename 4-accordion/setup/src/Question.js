import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [questionOpened, setQuestionOpened] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => setQuestionOpened(!questionOpened)}>
          {questionOpened ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {questionOpened && <p>{info}</p>}
    </article>
  );
};

export default Question;
