/** @format */

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ question }) {
  const [toggleInfo, setToggleInfo] = useState(false);

  const { title, info } = question;
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setToggleInfo(prevState => !prevState);
          }}>
          {toggleInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggleInfo && <p>{info}</p>}
    </article>
  );
}

export default Question;
