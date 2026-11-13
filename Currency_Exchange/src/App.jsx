import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="min-h-screen bg-blue-900 p-10 text-center">
      <h1 className="text-3xl font-bold underline bg-brown-500 text-white p-4">
        Currency Exchange App
      </h1>
    </div>
    </>
  )
}

export default App
