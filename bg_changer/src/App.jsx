import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
  <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap
     justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-lg">
        <button onClick={()=> setColor("red")}
        className=" outline-none px-4 py-2 rounded-full "
        style={{backgroundColor:"red"}}
        >Red</button>
        <button onClick={()=> setColor("green")}
        className="outline-none px-4 py-2 rounded-full"
        style={{backgroundColor:"green"}}
        >Green</button>
        <button onClick={()=> setColor("blue")}
        className="outline-none px-4 py-2 rounded-full"
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button onClick={()=> setColor("orange")}
        className="px-4 py-1 rounded-full outline-none"
        style={{backgroundColor:"orange"}}
        >orange</button>
        <button onClick={()=> setColor("purple")}
        className=" outline-none px-4 py-2 rounded-full "
        style={{backgroundColor:"purple"}}
        >purplr</button>
</div>
     </div>
  </div>
  )
}

export default App
