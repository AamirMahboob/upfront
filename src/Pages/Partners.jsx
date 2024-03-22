import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import partners from '../assets/partners.png'
import Box from '../resusable/Box'
import google from '../assets/download11-removebg-preview.png'

import { TbMedicalCross } from "react-icons/tb";
import Footer from '../components/Footer'

const Partners = () => {
    return (
        <>
            <Navbar />
            <Hero title='Partner with us' content='Unlock your Hr potential with Prepaid insurance, when off-boarding! A coverage plan that lets employers select from a range of perks, improving the workplace for everyone.'
                buttonTitle='Request a Quote' img={partners}
            />
            <div className=" relative flex flex-col   items-center  w-screen  justify-center p-10 bg-[#03045e]  ">
                <div className='flex justify-center items-center gap-3'>

                    <h1 className='font-heading text-white font-bold    text-[20px]'>Our Valuable Partners</h1>
                </div>
                <div className='flex gap-10 mt-10'>
                    <Box title='Stripe' />
                    <Box title='Google' />
                    <Box />
                    <Box />

                </div>
                <div className='flex gap-10 mt-10'>
                    <Box />
                    <Box />
                    <Box />
                    <Box />

                </div>
                <div className='flex gap-10 mt-10'>
                    <Box />
                    <Box />
                    <Box />
                    <Box />

                </div>
            </div>

            <div className=" relative flex flex-col   items-center  w-screen  justify-center p-32 bg-[#FFFFFF]  ">
                <div className='flex justify-center items-center gap-3'>

                    <h1 className='font-heading text-[#03045E] font-bold     text-[20px]'>Why partner with Fairsplit?</h1>
                </div>
                <div className='flex gap-10 mt-10'>
                   
                        <div className='w-60 h-48 bg-[#b2aeae] flex justify-center items-center'>


                        </div>
                        <div className='w-60 h-48 bg-[#b2aeae] flex justify-center items-center'>


                        </div>
                        <div className='w-60 h-48 bg-[#b2aeae] flex justify-center items-center'>


                        </div>
                   

                </div>
                
            </div>
            <hr class="border-[#007EA7] border-[1px]   font-bold ml-32    w-[80vw] "></hr>
           
            <div className='flex  flex-col justify-center items-center p-10'>
            <h1 className='font-heading text-[#03045E] font-bold     text-[20px]'>Or, start the conversation here</h1>
              <div className='bg-[#e8e8f1] flex justify-center items-center mt-10 px-40  '>
                   <form className='p-20 flex flex-col gap-5'>
                        <div className='flex flex-row  gap-10'>
                            <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-[#03045E]' >Enter Your Name</label>
                            <input type="text" placeholder='Enter your Name' className='border-[#000000]  w-[320px] h-[44px] outline-none p-2 rounded-[5px]  bg-[#FFFFFF]'  />
                            </div>
                            <div className='flex flex-col gap-2 '>
                            <label htmlFor="" className='text-[#03045E]'>you @domain.com</label>
                            <input type="text" placeholder='Enter your Name' className='border-[#000000]  w-[320px] h-[44px] outline-none p-2 rounded-[5px]  bg-[#FFFFFF]'  />

                            </div>
                        </div>
                        <div className='flex flex-row  gap-10'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-[#03045E]'>Company/SchoolName</label>
                            <input type="text" placeholder='Enter your Name' className='border-[#000000]  w-[320px] h-[44px] outline-none p-2 rounded-[5px]  bg-[#FFFFFF]'  />

                            </div>
                            <div className='flex flex-col gap-2'>
                                
                            <label htmlFor="" className='text-[#03045E]'>Phone number</label>
                            <input type="text" placeholder='Enter your Name' className='border-[#000000]  w-[320px] h-[44px] outline-none p-2 rounded-[5px]  bg-[#FFFFFF]'  />

                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="" className='text-[#03045E]'>Message</label>
                            <textarea placeholder='Message' className='border-[#000000]  w-full   outline-none p-2 rounded-[5px]  bg-[#FFFFFF]' rows={5} /> 
                        </div>
                   </form>
              </div>
            </div>
            <Footer />

        </>
    )
}

export default Partners