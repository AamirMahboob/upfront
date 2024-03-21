import React from 'react'

const Box = ({title}) => {
  return (
    <div className='w-60 h-44 bg-white flex justify-center items-center'>
                    <h1 className='font-heading text-[#635BFF] font-bold text-[30px] '>{title}</h1>
        
    </div>
  )
}

export default Box