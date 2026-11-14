import { useId } from "react"
import React , {useId} from  'react' 


function InputBox( {
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency="usd",
amountDisabled='false',
currencyDisabled='false',
  className=""
})


{
const amountInputId = useId();

  return (
    <div ClassName={` bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className='w-1/2'>
      <label  htmlFor={amountInputId} 
      className='text-gray/40 mb-3 inline-block'>{label}</label>
      <input
      id={amountInputId}  
      className='w-full outline-none bg-transparent py-1.5'
      type="number"
      placeholder='Amount'
      value={amount}
      disabled={amountDisabled === 'true'}
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
      />
      </div>

      <div className=' flex-wrap justify-end text-right'>
      <p className='text-gray/40 mb-3 w-full'>Currency type</p>
      <select className='rounded-lg bg-gray/100 py-1.5 px-1 outline-none' 
      value={selectedCurrency} onChange={(e) => onCurrencyChange &&
       onCurrencyChange(e.target.value)} disabled={currencyDisabled === 'true'}> 


        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default InputBox
