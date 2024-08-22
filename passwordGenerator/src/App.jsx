import React from 'react'
import { useState , useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789";
      }
    if (charAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><";
    }

    for(let i = 1; i <= length; i++) {
      let char = (Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  } ,[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, charAllowed, numberAllowed, passwordGenerator])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input ref={passwordRef} type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly></input>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-z'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value);}}></input>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev);}}></input>
          <label className='ml-1' htmlFor='numberInput'> Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked = {charAllowed} id='characterInput' onChange={() => {setCharAllowed((prev) => !prev);}}></input>
          <label className='ml-1' htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App