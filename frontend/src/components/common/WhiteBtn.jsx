import React from 'react'

const WhiteBtn = ({text,btnHandler}) => {
  return (

    <button onClick={btnHandler} className='bg-white text-black text-[16px]  rounded-full py-3 px-4'>
        {text}
        
    </button>
  )
}

export default WhiteBtn