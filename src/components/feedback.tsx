interface FeedbackComponentProps {
  userAnswer: string
}

const FeedbackComponent: React.FC<FeedbackComponentProps> = ({ userAnswer }) => {
  return <div>Hello Feedback Component</div>
}

export default FeedbackComponent
