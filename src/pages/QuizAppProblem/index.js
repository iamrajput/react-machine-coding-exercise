import React from 'react'
import QuizQuestion from '../../components/QuizQuestion';
import { useState } from 'react';
import questions from '../../constants/question.json'
import Result from '../../components/Result';
import { Link } from 'react-router-dom';

const QuizAppProblem = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [userAnswer,setUserAnswer] = useState([]);

    const handleNextQuestion = (isCorrect) => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer([...userAnswer,isCorrect])
    }
    
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8"><Link to="/">Quiz App</Link></h1>
        {currentQuestion < questions.length && (
        <QuizQuestion 
        question={questions[currentQuestion]}
        onAnswerClick={handleNextQuestion}
        />
        )}
        {currentQuestion === questions.length && (
            <Result 
            questions={questions}
            userAnswer={userAnswer}

            />
        )}
        
    </div>
  )
}

export default QuizAppProblem