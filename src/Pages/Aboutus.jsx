import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const Aboutus = () => {
  return (
    <>
     <Navbar />
     <motion.div
             initial={{opacity:0}}
             animate={{opacity: 1}}
             exit={{opacity:0}}
            > 
     <div className='bg-[#EBEBEB] w-screen h-[32rem]'>

     </div>
     <div className='bg-[#ffffff] flex gap-20 justify-center items-center p-20 '>
         <div className='w-[44%] h-[30rem] bg-[#b0adad]'>

         </div>
         <div className='w-[40%] flex flex-col gap-3 '>
         <h1 className='font-heading text-black text-3xl w-[60%] font-medium leading-2 text-left'>Cut Costs, Not Capability</h1>

            <p className='font-body text-base font-normal leading-8 text-left'>FairSplit helps reduce costs for employers in providing employee benefits during off-boarding. 
Increasing profits during off-boarding with an efficient workforce via prepaid insurance involves strategically managing employee departures while minimizing financial strain. Prepaid insurance will help play a crucial role in this process by offering a cost-effective way to handle associated expenses like turnover and benefits continuation.
This approach allows for better financial planning and resource allocation, potentially leading to increased profitability for the company. It streamlines the off-boarding process, ensuring a more efficient transition for both the organization and the departing employees</p>
         </div>
     </div>
     <div className=" relative flex flex-col   items-center  w-screen  justify-center p-32 bg-[#FFFFFF]  ">
                <div className='flex justify-center items-center gap-3'>

                    <h1 className='font-heading text-[#03045E] font-bold     text-[20px]'>Our Process</h1>
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
            <div className='bg-white h-[35rem]'>

            </div>
      <Footer />
      </motion.div>
    </>
  )
}

export default Aboutus