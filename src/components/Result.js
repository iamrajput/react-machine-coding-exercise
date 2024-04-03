const Result = ({questions,userAnswer}) => {
    console.log(userAnswer);
    const correctAnswer = userAnswer.filter((answer) => answer?.isCorrect).length;
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Quiz Results</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">You answered <span className="text-green-600 font-semibold">{correctAnswer}</span> out of {questions?.length} questions correctly.</p>
        <div>
            {questions.map((question,index) => {
           return (
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Question {index+1}: {question?.question}</h3>
                <p className="text-gray-600">Correct answer: {question?.answerOptions.find((answer) => answer).text}</p>
                <p className={userAnswer[index].isCorrect ? `text-green-600` : `text-red-600`}>Your answer: {userAnswer[index].text}</p>
            </div>
           ) 
        })}
        </div>
    </div>
</div>

  )
}

export default Result