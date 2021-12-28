/** @format */

import React, { useState } from 'react';
import data from '../data';
import Question from './Question';
function QuestionList() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className='container'>
      <h3>Questions and Answer about Login</h3>
      <section className='info'>
        {questions.map((question, index) => {
          return <Question key={index} question={question} />;
        })}
      </section>
    </div>
  );
}

export default QuestionList;
