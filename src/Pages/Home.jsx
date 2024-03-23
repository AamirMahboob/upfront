import React from 'react'
import Navbar from '../components/Navbar'
import bgHome from '../assets/homebg.png'
import Social from '../resusable/Social'
import emp from '../assets/emp.jpeg'
import dash from '../assets/dash.png'
import { TbMedicalCross } from "react-icons/tb";
import Button from '../resusable/Button'
import emp2 from '../assets/emp2.jpeg'
import emp3 from '../assets/calc.jpeg'
import emp4 from '../assets/emp4.jpeg'
import emp5 from '../assets/emp5.jpeg'
import Footer from '../components/Footer'
import emp7 from '../assets/emp7.png'
import emp8 from '../assets/emp8.jpeg'
import emp10 from '../assets/emp10.jpeg'
import FAQ from '../components/FAQ'
import logo from '../assets/Group 25.png'
import Box from '../resusable/Box'
import { easeIn, motion } from 'framer-motion'
import Calculator from '../components/Calculator'
const Home = () => {
    return (
        <>
            <Navbar />
            <motion.div
             initial={{opacity:0}}
             animate={{opacity: 1}}
             exit={{opacity:0}}
            >
            <div style={{ backgroundImage: 'linear-gradient(#031c6b, #03045E)' }} className=" bg-[#03045E] relative flex justify-center items-center gap-10 flex-row w-screen h-[43.625rem]  ">
                
                <div className='flex flex-col w-[40%]'>
                <motion.h1
                 initial ={{x:-100,opacity:0}}
                 animate={{x:0,opacity:1}}
                 viewport={{once:true}}
                 transition={{
                   delay:0.2,
                   x:{type:'spring',stiffness:60},
                   opacity:{duration:1},
                   ease:"easeIn",
                   duration:1
                 }}
                className='font-heading text-white font-bold    text-[30px]'>Reorganize: Save 60 Days and Cut Costs by 15%!</motion.h1>
                <motion.p 
                   initial ={{x:-100,opacity:0}}
                   animate={{x:0,opacity:1}}
                   viewport={{once:true}}
                   transition={{
                     delay:0.3,
                     x:{type:'spring',stiffness:60},
                     opacity:{duration:0.6},
                     ease:"easeIn",
                     duration:1
                   }}
                className="font-body font-normal text-[1.2rem] leading-[2.25rem] text-white"><span className='font-martel-sans font-bold text-[1.2rem] leading-[2.25rem]'>FairSplit Calculator:Upfront</span> <br />
The Upfront calculator is designed to help companies discern both the costs and value associated with off-boarding payments</motion.p>

                </div>
                <motion.div
                  initial ={{x:100,opacity:0}}
                  whileInView={{x:0,opacity:1}}
                  viewport={{once:true}}
                  transition={{
                    delay:0.2,
                    x:{type:'spring',stiffness:60},
                    opacity:{duration:1},
                    ease:"easeIn",
                    duration:1
                  }}
                style={{ backgroundImage: 'linear-gradient(#03045E,#031c6b)' }} className='w-[45%] flex justify-center items-center h-[40rem]' >
                     <Calculator />
                </motion.div>
            </div>
            <Social />
            <div style={{
                backgroundImage: `url(${emp})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }} className='h-[34.625rem] w-screen relative'>
                <div className='flex justify-center items-center  gap-2'>
                    <TbMedicalCross size={34} color='#03045E' />
                    <h1 className=' text-[#03045E] w-[30.5rem] mt-14 font-medium font-heading text-[1.5rem]' > Off-Boarding Made Personal: Your Company, Our Custom Solution.</h1>

                </div>
                <motion.img 
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{
                     delay: 0.4,
                     scale: { type: 'spring', stiffness: 100 },
                     opacity: { duration: 0.5 },
                     ease: 'easeInOut',
                   }}
                src={dash} width={700} className='absolute top-40 left-[20%]' />
                
            </div>
            <div className='flex justify-center  items-center p-20 bg-white h-[40.625rem] w-[100vw]  mt-44'>
                <div className='w-[50%] flex flex-col gap-4  '>
                    <div className='flex gap-10 h-[20.625rem]   relative'>
                        <motion.div
                         initial ={{x:-50,opacity:0}}
                         animate={{x:0,opacity:1}}
                           viewport={{once:true}}
                         transition={{
                           delay:0.2,
                           x:{type:'spring',stiffness:60},
                           opacity:{duration:1},
                           ease:"easeIn",
                           duration:1
                         }}
                        style={{
                            backgroundImage: `url(${emp2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '20rem',
                            height: '20rem',
                        }}></motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.4,
                            scale: { type: 'spring', stiffness: 100 },
                            opacity: { duration: 0.5 },
                            ease: 'easeInOut',
                          }}
                        style={{
                            backgroundImage: `url(${emp3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '13rem',
                            height: '13rem',
                        }} className='bg-black absolute top-28 right-3'></motion.div>
                    </div>
                    <div className='flex gap-10 h-[24.625rem]   relative'>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.4,
                            scale: { type: 'spring', stiffness: 100 },
                            opacity: { duration: 0.5 },
                            ease: 'easeInOut',
                          }}
                        style={{
                            backgroundImage: `url(${emp4})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '13rem',
                            height: '13rem',
                        }}></motion.div>
                        <motion.div
                          initial ={{x:50,opacity:0}}
                          animate={{x:0,opacity:1}}
                        //    viewport={{once:true}}
                          transition={{
                            delay:0.2,
                            x:{type:'spring',stiffness:60},
                            opacity:{duration:1},
                            ease:"easeIn",
                            duration:1
                          }}
                        style={{
                            backgroundImage: `url(${emp5})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '18rem',
                            height: '18rem',
                        }} className='  absolute top-10 right-3'></motion.div>
                    </div>


                </div>
                <motion.div
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
                className=' flex flex-col  gap-3 w-[50%] p-20'>
                    <div className='flex gap-8'>< TbMedicalCross
                     size={34} color='#03045E' />
                        <h1
                        
                        className=' text-[#03045E]    font-medium font-body text-[1rem]'>ABOUT US</h1></div>
                    <h1 className='text-black  font-medium font-heading text-[2.5rem] leading-[74.83px]'>FairSplit</h1>


                    <div className='flex flex-col gap-10'>
                        <p className='font-martel-sans   text-base leading-[36px]'>FairSplit delivers tranquility to your business operations, when off-boarding employees. By securing your forthcoming commitments, your company reaps substantial benefits.<br></br>
                            <span className='font-martel-sans font-bold   text-base ' >Escrow Management:</span> Establishes secure accounts dedicated to managing funds for off-boarding benefits.
                            <span className='font-martel-sans font-bold   text-base ' > Bond System:</span> Upholds fiscal responsibility via bonds.
                            Tax Optimization: Bypasses Social Security and Medicare tax implications, when off-boarding.</p>
                        <Button isVisible={true} isWhiteText={true} value='Get Started ' />
                    </div>
                </motion.div>
            </div>
            <div className='bg-[#F2F3F7] w-screen h-[45.625rem] flex justify-center items-center gap-6'>
                <div
                    style={{
                        width: '34rem',
                        height: '40rem',
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${emp7})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '10px'
                    }}
                    className='relative flex justify-center items-center'
                >
                    <div className='w-72   flex flex-col gap-5 h-[25rem]    '>
                        <p className='font-body text-white   font-bold text-base leading-[25px] tracking-[8%]'>WHAT WE DO</p>
                        <div className='flex items-center justify-center gap-5 w-full '>
                            <TbMedicalCross size={24} color='white' />
                            <h1 className='text-white w-64 font-heading font-medium text-[1.488rem] leading-[2.347rem]'>Empower Companies</h1>

                        </div>
                        <p className='text-white font-body font-normal text-base leading-[1.824rem]'>Provide businesses with prepaid insurance as a safe way to scale up or down based on market conditions, enabling strategic, calculated risk-taking.</p>
                        <Button isVisible={true} isWhiteText={false} value='Learn More' />

                    </div>

                </div>
                <div className=' flex flex-col gap-5 h-[40rem]'>
                    <div
                        style={{
                            width: '33rem',
                            height: '20rem',
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${emp8})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '10px',
                        }}
                        className='flex justify-center items-center'
                    >
                        <div className='flex flex-col gap-4    '>
                            <div className='flex items-center   gap-3 w-full'>
                                <TbMedicalCross size={24} color='white' />
                                <h1 className='text-white w-64 font-heading font-medium text-[1.488rem] leading-[1.347rem]'>Insurance Bond</h1>
                            </div>
                            <p className='text-white  w-96   font-body font-normal text-[16px] leading-[1.824rem]'>This commercial surety bond acts as prepaid insurance. It ensures sufficient funds are in escrow to cover employee off-boarding packages, with the escrow balance setting the disbursement limit.</p>
                            <Button isVisible={true} isWhiteText={false} value='Learn More' />
                        </div>
                    </div>
                    <div
                        style={{
                            width: '33rem',
                            height: '20rem',
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${emp8})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '10px',
                        }}
                        className='flex justify-center items-center'
                    >
                        <div className='flex flex-col gap-4    '>
                            <div className='flex items-center   gap-3 w-full'>
                                <TbMedicalCross size={24} color='white' />
                                <h1 className='text-white  font-heading font-medium text-[1.488rem] leading-[1.347rem]'>
                                Tailored to your company
                                </h1>
                            </div>
                            <p className='text-white  w-96   font-body font-normal text-[16px] leading-[1.824rem]'>
                            Data powered reports aid in effective decision-making, trend detection, risk mitigation, and operational improvement, enhancing your competitive edge, strategic planning, and workforce productivity while reducing costs.
                                 </p>
                            <Button isVisible={true} isWhiteText={false} value='Learn More' />
                        </div>
                    </div>
                     

                </div>
            </div>
            <div
               style={{
                 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${emp10})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                 
            }}
            className='w-[100vw] h-[45rem]  flex justify-center items-center'
            >
            
             <FAQ />
             
            </div>
            <div className=" relative flex flex-col  p-10 items-center  w-screen h-[35.625rem] bg-[#03045e]  ">
                  <div className='flex justify-center items-center gap-3'>
                   <TbMedicalCross size={30} color='white' />
                   <h1 className='font-heading text-white font-bold    text-[30px]'>OUR PARTNERS</h1>
                  </div>
                 <motion.div 
                   
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    scale: { type: 'spring', stiffness: 100 },
                    opacity: { duration: 0.5 },
                    ease: 'easeInOut',
                  }}
                 className='flex gap-10 mt-10'>
                    <Box />
                    <Box />
                    <Box />
                 </motion.div>
                 <motion.div 
                   
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4,
                    scale: { type: 'spring', stiffness: 100 },
                    opacity: { duration: 0.5 },
                    ease: 'easeInOut',
                  }}
                 className='flex gap-10 mt-10'>
                    <Box />
                    <Box />
                    <Box />
                 </motion.div>
            </div>
            <div className=' px-10 py-5 bg-white w-screen ' >
                <div className='flex flex-row justify-between items-center p-5'> 
                    <div className='flex flex-col gap-1  '>
                        <p className='font-body text-[14px] text-black'>Support</p>
                        <p className='font-body text-[14px] text-black'>For Companies</p>
                        <p className='font-body text-[14px] text-black'>For Channel Partners</p>
                        <p className='font-body text-[14px] text-black'> Bond</p>
                    </div>
                    <div className='flex flex-col gap-1 '>
                    <p className='font-body text-[14px] text-black'>Support</p>
                        <p className='font-body text-[14px] text-black'>LEGAL</p>
                        <p className='font-body text-[14px] text-black'> Term of use</p>
                        <p className='font-body text-[14px] text-black'>FAQS</p>
                        <p className='font-body text-[14px] text-black'>Privacy Policy</p>
                        <p className='font-body text-[14px] text-black'>Security</p>
                    </div>
                    <div className='flex flex-col gap-1 '>
                    <p className='font-body text-[14px] text-black'>Support</p>
                        <p className='font-body text-[14px] text-blackwhite'>Linked in</p>
                        <p className='font-body text-[14px] text-black'>Twitter</p>
                        <img src={logo} alt="" width={40} />
                    </div>
                </div>
                <hr class="border-black w-full mt-10  "></hr>
                <p className='font-body text-black mt-2 text-[16px]' >© 2024 FairSplit, Inc.</p>
                <hr class="border-black w-full mt-10 "></hr>
                <p className='font-body text-black text-[14px] mt-3'>
                Coverage is granted based on underwriting criteria. Not accessible in every state. For complete terms, conditions, and exclusions, please review the policy. The examples provided are merely illustrative. The specific terms of your policy prevail, and exclusions apply. Coverage depends on the precise details leading to a claim. FairSplit Inc. or its associated entities are licensed agencies authorized to sell specific insurance products and may earn commissions from these sales. Only the insurer that issues the policy holds the responsibility for its obligations. For more details, check the [Privacy Policy] section.
                </p>
            </div>
             </motion.div>
        </>
    )
}

export default Home