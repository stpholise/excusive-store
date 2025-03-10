import React from 'react'

const Countdown = () => {
  return (
    <div className='flex  justify-between gap-4 items-end '>
      <div className="">
        <p className='text-gray-500 text-xs uppercase'>Days</p>
        <p className="font-bold text-3xl"> 03</p>
      </div>
      <div className="text-3xl text-red-600"> 
      :
      </div>
      <div className="">
        <p className='text-gray-500 text-xs uppercase'>Hours</p>
        <p className="font-bold text-3xl"> 03</p>
      </div>
      <div className="text-3xl text-red-600"> 
      :
      </div>
      <div className="">
        <p  className='text-gray-500 text-xs uppercase'>Minutes</p>
        <p className="font-bold text-3xl"> 03</p>
      </div>
      <div className="text-3xl text-red-600"> 
      :
      </div>
      <div className="">
        <p className='text-gray-500 text-xs uppercase'>Seconds</p>
        <p className="font-bold text-3xl"> 03</p>
      </div>
    </div>
  )
}

export default Countdown