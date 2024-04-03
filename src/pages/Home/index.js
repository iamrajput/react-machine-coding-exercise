import React from 'react'
import { question } from '../../data/questionList';
import Question from '../../components/Question';


const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to React Interview Question</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
       
       question.map((que) => {
        return (
            <Question que={que}/>
        )
      })
    }
    </div>
    </div> 
  )
}

export default Home