import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Graph from '../components/Graph'
import emp11 from '../assets/emp11.jpeg'
import emp12 from '../assets/emp12.jpeg'
import emp13 from '../assets/emp13.jpeg'
const Bonds = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

      >
        <div>
          <Graph />
        </div>
        <div className='p-44'>
          <p className='font-medium text-[2rem]  font-heading leading-[2.96rem] text-center text-black'>Introducing the Prepaid Insurance Bond: Redefining Financial Security for Businesses</p>
        </div>
        <div className='flex gap-10  w-[100vw]   p-20'>
          <div className='w-[50%] flex justify-center items-center gap-3'>
            <div className='flex flex-col jsutify-center items-center '>
              <div className='border-l-[2px] w-1 h-20 border-black'  >
              </div>
              <div className='w-6 h-6 bg-[#03045E] rounded-xl'></div>
              <div className='border-l-[2px] w-1 h-20 border-black'  >
              </div>
            </div>
            <div>
              <p
                className='font-normal font-body text-5 leading-[36px] text-black'
              >
                When publicly-traded companies announce downsizing, it can significantly impact their stock performance. In the public sector, such news often leads to immediate market reactions. For Small and Medium-sized Businesses (SMBs), although they might not face direct stock market consequences, downsizing can still affect their Net Promoter Score (NPS). This metric, which gauges customer loyalty and satisfaction, may decline due to perceptions of instability or reduced service quality. Consequently, this can create negative pressure from stakeholders, including shareholders, if the business is publicly listed, or investors and partners in private companies.
              </p>
            </div>
          </div>
          <div className='flex gap-3 w-[50%]'>
            <div style={{
              backgroundImage: `url(${emp11})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '50%',
              height: '20rem'
            }}>

            </div>
            <div style={{
              backgroundImage: `url(${emp12})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '50%',
              height: '30rem'
            }}>

            </div>
          </div>
        
         
        </div>
        <hr className='border-[#B0ADAD]   w-[90vw] mx-14' />
        
        <div className='flex gap-10  w-[100vw]   p-20'>

          <div className='flex gap-3 w-[50%]'>
            <div style={{
              backgroundImage: `url(${emp11})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '50%',
              height: '20rem'
            }}>

            </div>
            <div style={{
              backgroundImage: `url(${emp12})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '50%',
              height: '30rem'
            }}>

            </div>

          </div>
          <div className='w-[50%] flex justify-center items-center gap-3'>
            <div className='flex flex-col jsutify-center items-center '>
              <div className='border-l-[2px] w-1 h-20 border-black'  >
              </div>
              <div className='w-6 h-6 bg-[#03045E] rounded-xl'></div>
              <div className='border-l-[2px] w-1 h-20 border-black'  >
              </div>
            </div>
            <div>
              <p
                className='font-normal font-body text-5 leading-[36px] text-black'
              >
                Discover the future of financial security with our Prepaid Insurance Bond, a groundbreaking financial tool designed to enhance your company's financial well-being. Tailored specifically to meet your unique financial needs, this bond offers on-demand coverage, perfect for managing employee off-boarding packages. An escrow account ensures there are always enough funds for payouts, providing peace of mind and stability.

                Our Prepaid Insurance goes beyond the usual FDIC insurance limit of $250,000, offering an unprecedented 1:1 match for both funds and insurance deposited into the escrow account. This innovative feature has garnered widespread acclaim for its cultural, social, and financial benefits, making it a sought-after solution in today’s market.
              </p>
            </div>
          </div>

        </div>
        <hr className='border-[#B0ADAD]   w-[90vw] mx-14' />


        <div className='flex gap-10  w-[100vw]   p-20'>
        <div className='w-[50%] flex justify-center items-center gap-3'>
            <div className='flex flex-col jsutify-center items-center '>
              <div className='border-l-[2px] w-1 h-20 border-black'  >
              </div>
              <div className='w-6 h-6 bg-[#03045E] rounded-xl'></div>
              <div className='border-l-[2px] w-1 h-20 border-black'  >
              </div>
            </div>
            <div>
              <p
                className='font-normal font-body text-5 leading-[36px] text-black'
              >
                Discover the future of financial security with our Prepaid Insurance Bond, a groundbreaking financial tool designed to enhance your company's financial well-being. Tailored specifically to meet your unique financial needs, this bond offers on-demand coverage, perfect for managing employee off-boarding packages. An escrow account ensures there are always enough funds for payouts, providing peace of mind and stability.

                Our Prepaid Insurance goes beyond the usual FDIC insurance limit of $250,000, offering an unprecedented 1:1 match for both funds and insurance deposited into the escrow account. This innovative feature has garnered widespread acclaim for its cultural, social, and financial benefits, making it a sought-after solution in today’s market.
              </p>
            </div>
          </div>
          <div className='flex gap-3 w-[50%]'>
            <div style={{
              backgroundImage: `url(${emp13})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right top',
              width: '50%',
              height: '30rem'
            }}>

            </div>
            <div style={{
              backgroundImage: `url(${emp11})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom left',
              width: '50%',
              height: '20rem'
            }}>

            </div>
          </div>
          
        </div>

        <Footer />
      </motion.div>
    </>
  )
}
export default Bonds