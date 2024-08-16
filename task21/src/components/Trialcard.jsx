import React from 'react'

function Trialcard({username, description = "pokemon",images}) {
  return (
    <>
    <div className='bg-slate-600 flex flex-col items-center justify-center h-56 w-52 gradient-border'>
      <img src= {images}
      className='bg-yellow-400 h-32 w-28 rounded-md object-cover' ></img>
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className=" flex mt-2 text-sm text-gray-300 gap-5"><b>Feature:</b> 
          {description}
        </p>
    </div>
    </>
  )
}

export default Trialcard