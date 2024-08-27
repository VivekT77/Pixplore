import React from 'react'

const GrayBtn = ({text,btnHandler}) => {
  return (
    <button onClick={btnHandler} className='bg-[#E9E9E9] rounded-full py-2 px-3'>
        {text}
    </button>
  )
}

export default GrayBtn