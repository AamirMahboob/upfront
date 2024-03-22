import React from 'react'
import logo from '../assets/Group 25.png'

const Footer = ({isText}) => {
  return (
    <div className=' px-10 py-5 bg-[#03045e] w-screen ' >
                <div className='flex flex-row justify-between items-center p-5'> 
                    <div className='flex flex-col gap-1  '>
                        <p className='font-body text-[14px] text-white'>Support</p>
                        <p className='font-body text-[14px] text-white'>For Companies</p>
                        <p className='font-body text-[14px] text-white'>For Channel Partners</p>
                        <p className='font-body text-[14px] text-white'> Bond</p>
                    </div>
                    <div className='flex flex-col gap-1 '>
                    <p className='font-body text-[14px] text-white'>Support</p>
                        <p className='font-body text-[14px] text-white'>LEGAL</p>
                        <p className='font-body text-[14px] text-white'> Term of use</p>
                        <p className='font-body text-[14px] text-white'>FAQS</p>
                        <p className='font-body text-[14px] text-white'>Privacy Policy</p>
                        <p className='font-body text-[14px] text-white'>Security</p>
                    </div>
                    <div className='flex flex-col gap-1 '>
                    <p className='font-body text-[14px] text-white'>Support</p>
                        <p className='font-body text-[14px] text-white' >Stay in Touch</p>
                        <p className='font-body text-[14px] text-white'>Linked in</p>
                        <p className='font-body text-[14px] text-white'>Twitter</p>
                        <img src={logo} alt="" width={40} />
                    </div>
                </div>
                <hr class="border-white w-full mt-10  "></hr>
                <p className='font-body text-white mt-2 text-[16px]' >© 2024 FairSplit, Inc.</p>
                <hr class="border-white w-full mt-10 "></hr>
                <p className='font-body text-white text-[14px] mt-3'>
                Coverage is granted based on underwriting criteria. Not accessible in every state. For complete terms, conditions, and exclusions, please review the policy. The examples provided are merely illustrative. The specific terms of your policy prevail, and exclusions apply. Coverage depends on the precise details leading to a claim. FairSplit Inc. or its associated entities are licensed agencies authorized to sell specific insurance products and may earn commissions from these sales. Only the insurer that issues the policy holds the responsibility for its obligations. For more details, check the [Privacy Policy] section.
                </p>
            </div>
  )
}

export default Footer