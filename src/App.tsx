import './App.css'
import Header from './components/header'
import Questions from './components/questions'

export default function App() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Hola mundo!</h1>
      <p>
        <Questions />
      </p>
    </div>
  )
}
