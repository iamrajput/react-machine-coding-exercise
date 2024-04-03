import React from 'react'
import Question from './Question';

const QuizQuestion = ({question,onAnswerClick}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{question?.question}</h2>
        <div className="grid grid-cols-2 gap-8">
        {question.answerOptions.map((option) => {
            return (
                <button onClick={() => onAnswerClick(option)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">
                {option?.text}
            </button>
            )
        })}
        </div>
    </div>
  )
}

export default QuizQuestion