import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Aboutus = () => {
  return (
    <>
     <Navbar />
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
      <Footer />
    </>
  )
}

export default Aboutus