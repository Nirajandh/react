import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//let counter= 5

let [counter,setcounter]=useState('15')




const addvalue =()=> {
// console.log("value added")
if(counter<20){ counter ++}

 setcounter(counter)

}





const removevalue=()=>{
      if(counter>0){ counter -- }
   setcounter(counter)
}


  return (
    <>
      <h1> HELLO NIRANJAN</h1>
      <h1> counter value {counter}</h1>

      <button
      onClick={addvalue}
      >Add Value </button>
      <br/>
      <button
      onClick={removevalue}
      >Remove Value </button>
    </>
  )
}

export default App
