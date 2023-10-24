import { useState } from 'react'

import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)

  
  const addValue = () => {
    // Counter = Counter + 1
    
    if(Counter<20 ){               
      Counter = Counter + 1
      setCounter(Counter)
    }
  }

  const removeValue = () => {
     if(Counter>0 )
      Counter = Counter - 1
      setCounter(Counter)
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value :{Counter}</h2>

      <button
      onClick={addValue}
      
      > Add value {Counter}</button>
      <br />
      <br />
      
      <button
      onClick={removeValue}
>Remove value {Counter}</button>
    </>
  )
}

export default App
