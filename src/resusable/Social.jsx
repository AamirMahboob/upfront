import React from 'react'
import aws from '../assets/aws.png'
import thororpass from '../assets/thoropass.png'
import merge from '../assets/merge.png'
import google from '../assets/download11-removebg-preview.png'


const Social = () => {
  return (
    <div className='w-screen h-44 bg-[#F2F3F7] flex flex-col justify-center items-center p-3'>
                <h1 className='font-heading text-[#03045E] font-bold text-[16px] leading-6 mt-3'>OUR INTEGRATIONS</h1>
                <div className='flex justify-center items-center  gap-10'>
                    <h1 className='font-heading text-[#635BFF] font-bold text-[30px]  '>Stripe</h1>
                    <img src={aws} alt="" className='w-44  ' />
                    <img src={thororpass} className='w-44  ' alt="" />
                    <img src={google} className='w-44  ' alt="" />
                    <img src={merge} className='w-44 ' alt="" />
                </div>


            </div>
  )
}

export default Social