import { useState, useEffect } from 'react'
import civicsQuestions from '../data/questions'

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState<string>('The current question is...')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * civicsQuestions.length)
    setCurrentQuestion(civicsQuestions[randomIndex].question)
  }, [])

  return (
    <div>
      <p>{currentQuestion}</p>
    </div>
  )
}
