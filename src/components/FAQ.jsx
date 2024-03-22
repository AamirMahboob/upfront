import React, { useState } from 'react'
import { TbMedicalCross } from "react-icons/tb";


const FAQ = () => {
    const [isFirstOpen, setIsFirstOpen] = useState(false)
    const [isSecondOpen, setIsSecondOpen] = useState(false)

    const data1 = [
        {
            id: 1,
            question: "What is a Severance package ?",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 2,
            question: "What is Aid ?",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 3,
            question: "Why prepaid Insurance:",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 4,
            question: "Premium Payment:",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 5,
            question: "Compilance?",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        }
    ]
    const data2 = [
        {
            id: 1,
            question: "What is a Severance package ?",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 2,
            question: "What is Aid ?",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 3,
            question: "Why prepaid Insurance:",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 4,
            question: "Premium Payment:",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        },
        {
            id: 5,
            question: "Compilance?",
            answer: "This website is a platform for companies to find and connect with their employees. It is designed to help companies find and connect with their employees. It is also designed to help companies find and connect with their employees."
        }
    ]
    const handleOpen1 = (id) => {
        setIsFirstOpen(isFirstOpen=== id ? null : id);
    };
    const handleOpen2 = (id) => {
        setIsSecondOpen(isSecondOpen=== id ? null : id);
    };
    return (
        <div className='flex justify-center items-center flex-col gap-10'>
        <div className='flex gap-4 justify-center items-center  '>
                 <TbMedicalCross color='white' size={34} />
                 <h1 className='text-white     font-medium font-heading text-[1.5rem]'>FAQ's</h1>
             </div>
             <h1 className='text-white    font-medium font-heading text-[1.5rem]'>Frequently Asked Questions</h1>
        <div className='flex justify-center items-center gap-10'>
             
            <div className='flex flex-col w-[35rem] gap-10'>
            {data1.map((item) => (
                <div  key={item.id}>
                    <div className='flex flex-row justify-between px-4 py-2 rounded-md bg-white w-[35rem] border border-black gap-10'>
                    <h1 className='font-body font-bold  text-base leading-[1.824rem] text-[#03045E]'>{item.question}</h1>
                    <button className='' onClick={() => handleOpen1(item.id)}>
                        {isFirstOpen === item.id ? '-' : '+'}
                    </button>
                    </div>
                    {isFirstOpen === item.id && <div className='bg-white rounded-sm'>{item.answer}</div>}
                </div>
            ))}
        </div>
        <div className='flex flex-col  w-[35rem]  gap-10'>
            {data2.map((item) => (
                <div  key={item.id}>
                    <div className='flex flex-row justify-between px-4 py-2 rounded-md bg-white w-[35rem] border border-black gap-10'>
                    <h1 className='font-body font-bold  text-base leading-[1.824rem] text-[#03045E]'>{item.question}</h1>
                    <button className='' onClick={() => handleOpen2(item.id)}>
                        {isSecondOpen === item.id ? '-' : '+'}
                    </button>
                    </div>
                    {isSecondOpen === item.id && <div className='bg-white rounded-sm'>{item.answer}</div>}
                </div>
            ))}
        </div>
        </div>
        </div>
    )
}

export default FAQ