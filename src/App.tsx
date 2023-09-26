import './App.css'
import TestComponent from './textComponent'
import Header from './components/header'

export default function App() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Hola mundo!</h1>
      <TestComponent />
    </div>
  )
}
