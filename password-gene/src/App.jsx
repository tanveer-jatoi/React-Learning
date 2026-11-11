import { useState , useCallback} from 'react'
function App() {
  const [length, setLength] = useState(8)
const [NumberAllowed, setNumberAllowed] = useState(false)
const [CharAllowed ,setCharAllowed] = useState(false)
const [Password, setPassword] = useState("")

const passwordGenerator = useCallback(() => {
  let password = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(NumberAllowed){
    srt += "0123456789"
  }
  if(CharAllowed){
    str += "!@#$%^&*()_+"
for (let i = 0; i < length; i++) {
  const Char = Math.floor(Math.random() * str.length + 1)
password += str.charAt(Char)

setPassword(password)
}

  }
}, [length, NumberAllowed, CharAllowed, setPassword])

  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md
  rounded-lg px-4 my-8 text-shadow-orange-500 bg-gray text-center' ><h1 className=" text-3xl font-bold underline text-center">
  Password Generator
  </h1>
<div className='flex shadow rounded-b-lg overflow-hidden mb-5'>
<input
type="text"
value={Password}
className="w-full outline-none py-1 px-2"
placeholder="Your Password"
Readonly
/>

<button>Copy</button>
</div>
<div className='flex tex-sm gap-x-2'>
  <div className='flex items-center gap-x-2'>
    <input
type="Range"
min="6"
max="100"
value={length}
className="Cursor-pointer"
/>
  <label>Length: {length}</label>
    </div>
    </div>



  
  </div>
</>
  )
}

export default App
