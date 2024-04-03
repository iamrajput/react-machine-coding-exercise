import React from 'react'
import { Link } from "react-router-dom";
const Question = ({que}) => {
  return (

    <Link to={que?.link}>
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-800 mb-4">{que?.title}</h2>
    <p className="text-gray-600">{que?.description}</p>
    </div>
    </Link>
  )
}

export default Question