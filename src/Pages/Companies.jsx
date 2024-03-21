import React from 'react'
import Navbar from '../components/Navbar'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import Button from '../resusable/Button'
import aws from '../assets/aws.png'
import merge from '../assets/merge.png'
import thororpass from '../assets/thoropass.png'
import google from '../assets/download11-removebg-preview.png'
import ipad from '../assets/ipad.png'
import b4 from '../assets/b4.png'
import logo from '../assets/Group 25.png'
import b7 from '../assets/ b7.png'
import { TbMedicalCross } from "react-icons/tb";
import Box from '../resusable/Box'
const Companies = () => {
    return (
        <>
            <Navbar />
            <div style={{ background: 'linear-gradient(180deg, rgba(0, 180, 216, 0.15) 0%, rgba(255, 255, 255, 0.3) 64.06%)' }} className=" relative flex flex-row w-screen h-[40.625rem]  ">
                <div className='w-[50%] flex flex-col p-10'>
                    <div style={{
                        backgroundImage: `url(${b1})`, // Corrected usage of backgroundImage
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} className="w-[30%] h-[90%] absolute top-[5%] left-[5%] gap-0   ">

                    </div>
                    <div className='absolute top-[5%] w-[50%] left-[5%] flex p-20 flex-col gap-4 '>
                        <h1 class="font-heading text-[3.83rem] text-[#03045E]  font-bold text-wrap ">
                            Transform Your Workplace: Embrace the Future
                        </h1>
                        <p className="font-body text-[#03031D] text-base font-normal leading-[1.5625rem] text-left">Unlock your Hr potential with Prepaid insurance, when off-boarding! A coverage plan that lets employers select from a range of perks, improving the workplace for everyone.</p>
                        <Button value='Request a quote' />
                    </div>
                </div>
                <div className='w-[50%] '>

                    <div style={{

                        backgroundImage: `url(${b2})`,
                        backgroundSize: 'cover', // Changed 'object' to 'cover'

                        // Changed 'background-repeat' to 'backgroundRepeat'
                        backgroundPosition: 'center',
                    }}
                        className="w-[30%]    absolute top-[20%] right-[10%] border border-gray-50 bg-[#B3DFEB] rounded-[50%] gap-0   "
                    >
                        <img src={b3} className=' ml-[-10%] h-[100%]' alt="" style={{
                            transform: 'rotateY(180deg)',
                        }} />
                    </div>
                </div>
            </div>
            <div className='w-screen h-44 bg-[#F2F3F7] flex flex-col justify-center items-center p-3'>
                <h1 className='font-heading text-[#03045E] text-[16px] leading-6 mt-3'>OUR INTEGRATIONS</h1>
                <div className='flex justify-center items-center  gap-10'>
                    <h1 className='font-heading text-[#635BFF] font-bold text-[30px] '>Stripe</h1>
                    <img src={aws} alt="" className='w-44  ' />
                    <img src={thororpass} className='w-44  ' alt="" />
                    <img src={google} className='w-44  ' alt="" />
                    <img src={merge} className='w-44 ' alt="" />
                </div>


            </div>
            <div className='p-10 mx-20 flex '>
                <div className="w-[30rem] h-[30.875rem]  py-3 flex   relative">
                    <div
                        style={{
                            background: 'linear-gradient(180deg, rgba(3, 4, 94, 0.18) 0%, rgba(0, 126, 167, 0.11) 64.06%)',
                            width: '23rem',
                            height: '25rem'
                        }}
                        className='rounded-lg'
                    ></div>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, rgba(3, 4, 94, 0.09) 0%, rgba(0, 126, 167, 0.06) 64.06%)',
                            width: '23rem',
                            height: '25rem'
                        }}
                        className='absolute left-16 top-16 rounded-lg'
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(${ipad})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}
                        className='absolute w-full h-full   rounded-lg'
                    >

                    </div>


                </div>
                <div className='w-[40rem] flex relative justify-center items-center ml-4 p-20  gap-2 flex-col'>
                    <h1 className='font-heading   font-bold  text-black text-[40px]'> Streamlining Downsizing with Strategic Benefits and AI Solutions</h1>
                    <hr class="border-[#007EA7] border-[1px] ml-[-350px] font-bold     w-32"></hr>
                    <p className='font-body font-500 w-[30rem] text-black text-[1rem] leading-9'>
                        FairSplit revolutionizes downsizing by blending strategic benefits management with cost-effective insurance solutions and comprehensive coverage. Our approach ensures a smooth off-boarding experience, backed by AI-driven risk mitigation and real-time data analysis. This results in an efficient, employee-focused downsizing process, enabling smarter, informed decision-making for your business. Choose FairSplit for a downsizing strategy that prioritizes efficiency and employee well-being
                    </p>
                </div>
            </div>
            <div className='flex flex-row p-10 '>
                <div className='p-10 mx-10 w-[50%] flex flex-col gap-3'>
                    <h1 className='ont-heading  font-bold  text-black text-[40px]'>
                        Your Partner in Cost-Effective Employee Transitions and Turnover
                    </h1>
                    <hr class="border-[#007EA7] border-[1px]   font-bold     w-32"></hr>

                    <p className='font-body font-500 w-[30rem] text-black text-[1rem] leading-9'>
                        Discover how FairSplit can help your company navigate turnover  and terminations more efficiently and cost-effectively. Our specialized approach leverages benefits insurance to minimize costs while maintaining comprehensive benefits coverage. We streamline the off-boarding process, making transitions smoother for both the company and its employees. Our risk mitigation strategies, backed by real-time data analysis, empower your business with informed decision-making. With FairSplit, experience a transition process that balances efficiency with employee care, optimizing your company's financial health and employee satisfaction. Let us guide you through a seamless, cost-effective employee transition journey.
                    </p>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${b4})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '40%'


                    }}
                    className='w-[50%]'
                >

                </div>
            </div>
            <div className='flex flex-row p-10 w-screen '>
                <div
                    style={{
                        backgroundImage: `url(${b4})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '40%'


                    }}
                    className='w-[50%]'
                >

                </div>
                <div className='p-10 mx-10 w-[50%] flex flex-col gap-10'>
                    <h1 className='font-heading  font-bold  text-black text-[30px]'>
                        Enhancing Corporate Restructuring with Smart Benefits Management and Ai
                    </h1>
                    <hr class="border-[#007EA7] border-[1px]   font-bold     w-32"></hr>
                    

                    <p className='font-body font-500 w-[30rem] text-black text-[1rem]  '>
                        Elevate your company's restructuring process with FairSplit's expert solutions. We specialize in optimizing employee benefits management, introducing significant cost-efficiency through strategic insurance utilization. Our AI-driven risk mitigation tools and real-time data analytics facilitate strategic decision-making, ensuring your restructuring is both effective and efficient. With a keen focus on employee morale and retention, FairSplit aids in creating a restructuring process that is not only successful but also employee-friendly. Embrace a seamless restructuring journey with FairSplit, where employee well-being and company success go hand in hand. Trust us to transform your corporate restructuring into a positive, forward-moving experience.
                    </p>
                </div>

            </div>
            <div className='p-3 flex '>
                <div className='w-50% mx-10 flex flex-col   '>
                    <h1 className='font-heading font-bold  text-black text-[30px]'>Streamlining M&A Employee Benefits Transition with Cost-Efficiency and Data-Driven Strategies</h1>
                    <hr class="border-[#007EA7] border-[1px] mt-20   font-bold     w-32"></hr>
                    
                    <p className=' font-body font-500 w-[30rem] text-black text-[1rem]  '>FairSplit is dedicated to supporting companies through the challenges of mergers and acquisitions (M&A) by ensuring a seamless transition of employee benefits. We excel in providing cost-efficient benefits management solutions that are crucial during M&A activities. Our risk mitigation strategies are tailored to the unique demands of mergers and acquisitions, ensuring a smooth process. Through comprehensive data analysis, FairSplit empowers organizations to make informed decisions, prioritizing employee retention and satisfaction. Embrace the complexities of M&A with confidence, knowing that FairSplit is by your side, committed to the well-being of your workforce and the success of your organizational transition. Let us guide you through a transformative M&A journey with our benefits-focused approach.</p>
                </div>
                <div className='w-[50%] flex relative mx-20'>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, rgba(3, 4, 94, 0.27) 0%, rgba(0, 126, 167, 0.17) 64.06%)',
                            width: '23rem',
                            height: '25rem'
                        }}
                        className='rounded-lg absolute   right-10 top-10'
                    ></div>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, rgba(3, 4, 94, 0.27) 0%, rgba(0, 126, 167, 0.17) 64.06%)',
                            width: '23rem',
                            height: '25rem'
                        }}
                        className='rounded-lg  asbolute right-10'
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(${b2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '23rem',
                            height: '23rem',


                            borderRadius: '10px', // Optional: Add rounded corners
                        }}
                        className='absolute top-[100px] left-[-80px] rounded-lg'
                    >

                    </div>

                </div>
            </div>
            <div className='flex flex-row p-10 w-screen '>
                <div
                    style={{
                        backgroundImage: `url(${b4})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '40%'


                    }}
                    className='w-[50%]'
                >

                </div>
                <div className='p-10 mx-10 w-[50%] flex flex-col gap-10'>
                    <h1 className='font-heading  font-bold  text-black text-[30px]'>
                        Boosting Employee Retention with Cost-Effective Benefits and Comprehensive Support
                    </h1>
                    <hr class="border-[#007EA7] border-[1px]   font-bold     w-32"></hr>

                    <p className='font-body font-500 w-[30rem] text-black text-[1rem]  '>
                        At FairSplit, we specialize in enhancing employee retention through our cost-effective benefits management and comprehensive off-boarding support. Our services are designed to elevate the overall employee experience, making your company an attractive place to work and grow. We provide proactive risk mitigation strategies and tools for informed decision-making, ensuring a stable and positive work environment. With FairSplit, create a workplace culture that not only supports but also values its employees, encouraging them to stay and thrive with your company. Join us in building a more engaged and committed workforce, powered by FairSplit's dedicated employee retention solutions.
                    </p>
                    <Button value='Request a Quote' />
                </div>

            </div>
            <div className=" relative flex flex-col  p-10 items-center  w-screen h-[35.625rem] bg-[#03045e]  ">
                  <div className='flex justify-center items-center gap-3'>
                   <TbMedicalCross size={30} color='white' />
                   <h1 className='font-heading text-white font-bold    text-[30px]'>OUR PARTNERS</h1>
                  </div>
                 <div className='flex gap-10 mt-10'>
                    <Box />
                    <Box />
                    <Box />
                 </div>
                 <div className='flex gap-10 mt-10'>
                    <Box />
                    <Box />
                    <Box />
                 </div>
            </div>
            <div className='p-20'>
                <div className='flex flex-row justify-between items-center'> 
                    <div className='flex flex-col gap-3'>
                        <p className='font-body text-[18px]'>Support</p>
                        <p className='font-body text-[18px]'>For Companies</p>
                        <p className='font-body text-[18px]'>For Channel Partners</p>
                        <p className='font-body text-[18px]'> Bond</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                    <p className='font-body text-[18px]'>Support</p>
                        <p className='font-body text-[18px]'>LEGAL</p>
                        <p className='font-body text-[18px]'> Term of use</p>
                        <p className='font-body text-[18px]'>FAQS</p>
                        <p className='font-body text-[18px]'>Privacy Policy</p>
                        <p className='font-body text-[18px]'>Security</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                    <p>Support</p>
                        <p className='font-body text-[18px]' >Stay in Touch</p>
                        <p className='font-body text-[18px]'>Linked in</p>
                        <p className='font-body text-[18px]'>Twitter</p>
                        <img src={logo} alt="" width={40} />
                    </div>
                </div>
                <hr class="border-gray-800 w-full mt-10 "></hr>
                <p>© 2024 FairSplit, Inc.</p>
                <hr class="border-gray-800 w-full mt-20 "></hr>
                <p className='font-body text-sm mt-3'>
                Coverage is granted based on underwriting criteria. Not accessible in every state. For complete terms, conditions, and exclusions, please review the policy. The examples provided are merely illustrative. The specific terms of your policy prevail, and exclusions apply. Coverage depends on the precise details leading to a claim. FairSplit Inc. or its associated entities are licensed agencies authorized to sell specific insurance products and may earn commissions from these sales. Only the insurer that issues the policy holds the responsibility for its obligations. For more details, check the [Privacy Policy] section.
                </p>
            </div>
            
 
        </>
    )
}

export default Companies