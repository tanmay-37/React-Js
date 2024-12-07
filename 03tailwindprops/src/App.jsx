import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-400 p-4 text-black mb-4">Tailwind test</h1>
      <Card username="Tanmay Talekar" btn="Hello" />
      <Card username="chai aur code"/>
    </>
  );
}

export default App
