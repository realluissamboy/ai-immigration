import { useState, useEffect } from 'react'
import civicsQuestions from './data/questions'
import './App.css'
import FeedbackComponent from './components/feedback'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState<{
    question: string
    answer: string
  } | null>(null)
  const [userAnswer, setUserAnswer] = useState<string>('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * civicsQuestions.length)
    setCurrentQuestion(civicsQuestions[randomIndex])
  }, [])

  const handleSubmit = () => {
    if (currentQuestion) {
    }
  }

  return (
    <div>
      <h2>{currentQuestion?.question}</h2>
      <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
      <button onClick={handleSubmit}>Submit Button</button>
      {/* <FeedbackComponent userAnswer={userAnswer} /> */}
      <FeedbackComponent />
    </div>
  )
}
