import { useState } from 'react'
import { InputBox } from './componants'
import { useCurrency } from './hooks'


import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)

  }
  const convertAmount = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }



  return (
    <>

      <div
        className='w-full h-screen bg-gray/10 flex flex-wrap items-center justify-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1612832021080-1f3b8c5d6f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VycmVuY3l8ZW58MHx8MHx8&w=1000&q=80')",
        }}
        >
          <div className='w-full'>
            <div className='w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
<form
 onSubmit={(e) =>{
  e.preventDefault();
  convert()
}}
  >
    <div className='w-full mb-1'>
  <inputBox
  label={Form}
  form={amount}
  currencyOption={Option}
onCurrencyChange={(currency) => setAmount(amount)}
setCurrency={form}
  />
    </div>
    <div className="relative w-full h-0.5">
      <button type="button"
      className="absolute left-1/2-translate-1/2 -translate-y-1/2
      border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
       onClick={swap}> Swap </button>
</div>
<div className="w-full mt-1 md-4">
<inputBox
label={form}
  form={amount}
  currencyOption={Option}
onCurrencyChange={(currency) => setAmount(currency)}
setCurrency={form}


/>
</div>
<button type="submit"
className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert</button>



  </div>
          </div>


      </div>


    </>


  )
}

  export default App
