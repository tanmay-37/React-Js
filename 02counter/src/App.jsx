import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  //let counter = 5
  
  const addValue = () => {
    //counter++;

    setCounter(counter+1)
  }

  const subValue= ()=>{
    setCounter(counter-1) 
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Remove value</button>
    </>
  );
}

export default App
