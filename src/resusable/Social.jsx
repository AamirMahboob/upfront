import React from 'react'
import aws from '../assets/aws.png'
import thororpass from '../assets/thoropass.png'
import merge from '../assets/merge.png'
import google from '../assets/download11-removebg-preview.png'
import {motion} from 'framer-motion'

const Social = () => {
  return (
    <div className='w-screen h-44 bg-[#F2F3F7] flex flex-col justify-center items-center p-3'>
                <motion.h1
                 initial ={{y:-50,opacity:0}}
                 whileInView={{y:0,opacity:1}}
                 // viewport={{once:true}}
                 transition={{
                   delay:0,
                   x:{type:'spring',stiffness:60},
                   opacity:{duration:1},
                   ease:"easeIn",
                   duration:1
                 }}
                className='font-heading text-[#03045E] font-bold text-[16px] leading-6 mt-3'>OUR INTEGRATIONS</motion.h1>
                <div className='flex justify-center items-center  gap-10'>
                    <motion.h1 
                    initial ={{x:-50,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    // viewport={{once:true}}
                    transition={{
                      delay:0.2,
                      x:{type:'spring',stiffness:60},
                      opacity:{duration:1},
                      ease:"easeIn",
                      duration:1
                    }}
                    className='font-heading text-[#635BFF] font-bold text-[30px]  '>Stripe</motion.h1>
                    <motion.img 
                    initial ={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    // viewport={{once:true}}
                    transition={{
                      delay:0.2,
                      x:{type:'spring',stiffness:60},
                      opacity:{duration:1},
                      ease:"easeIn",
                      duration:1
                    }}
                    src={aws} alt="" className='w-44  ' />
                    <motion.img
                    
                    
                    src={thororpass} className='w-44  ' alt="" />
                    <motion.img 
                    initial ={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    // viewport={{once:true}}
                    transition={{
                      delay:0.2,
                      x:{type:'spring',stiffness:60},
                      opacity:{duration:1},
                      ease:"easeIn",
                      duration:1
                    }}
                    src={google} className='w-44  ' alt="" />
                    <motion.img
                    initial ={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    // viewport={{once:true}}
                    transition={{
                      delay:0.2,
                      x:{type:'spring',stiffness:60},
                      opacity:{duration:1},
                      ease:"easeIn",
                      duration:1
                    }}
                    src={merge} className='w-44 ' alt="" />
                </div>


            </div>
  )
}

export default Social