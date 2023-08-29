import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions,setQuestions] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestions(data))
  },[])

  function updateDelete(removeQ){
    const removedQuestion = questions.filter((question) =>{
      return question.id !== removeQ.id ? true : false
    })
    setQuestions(removedQuestion)
  }

 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem key={question.id}  onDelete={updateDelete} question={question} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
