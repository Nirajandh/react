import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("green")

  return (

      <div className="w-full h-full duration-200"
     style={{ backgroundColor:color}} >

      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">

      <button
      onClick={()=> setColor("red")}
      className="outline-none px-4 text-white "
      style={ { backgroundColor: "red"}}>Red</button>


      <button
      onClick={()=> setColor("blue")}
      className="outline-none px-4 text-white "
      style={ { backgroundColor: "blue"}}>blue</button>


      <button
      onClick={()=> setColor("green")}
      className="outline-none px-4 text-white "
      style={ { backgroundColor: "green"}}>green</button>


      <button className="outline-none px-4 text-black "
      style={ { backgroundColor: color}}>white</button>
      </div>

      </div>


      </div>

  )
}

export default App
