import React, { useState } from 'react';
import { TbMedicalCross } from "react-icons/tb";
import Button from '../resusable/Button';

const Calculator = () => {
  const [offerBenefits, setOfferBenefits] = useState('');
  const [averageBenefit, setAverageBenefit] = useState('');
  const [companyExpenses, setCompanyExpenses] = useState('');

  const handleOfferBenefitsChange = (e) => {
    setOfferBenefits(e.target.value);
  };

  const handleAverageBenefitChange = (e) => {
    setAverageBenefit(e.target.value);
  };

  const calculateExpenses = () => {
    const expenses = offerBenefits * averageBenefit; // Your calculation formula here
    setCompanyExpenses(expenses);
  };

  return (
    <div className='flex flex-col gap-5 w-[80%]  relative '>
        <div className='flex  gap-4   '>
             <TbMedicalCross  size={34} color='white'/>
             <h1 className='font-body font-extrabold text-2xl leading-6 tracking-wider text-white'>FairSplit Calculator</h1>
        </div>
        <p className='text-white font-body font-semibold text-base leading-[25.54px]  '>Fairsplit can help your company win in tough times</p>
     
      <label className='text-white font-body font-light text-base leading-[25.54px]'>
        Offer Employees Boarding Benefits: </label>
        <input
          type="number"
          value={offerBenefits}
          onChange={handleOfferBenefitsChange}
          className='p-2 rounded-md'
        />
     
      
      <label className='text-white font-body font-light text-base leading-[25.54px]' >
        Employee Earning Average:</label>
        <input
          type="number"
          value={averageBenefit}
          onChange={handleAverageBenefitChange}
          className='p-2 rounded-md'
        />
      
     
      <div className='flex flex-row justify-between p-5' >
      <button onClick={calculateExpenses} className='text-white font-body font-light text-base leading-[25.54px]  '>Company Expenses:</button>
      
      
      {<h1 className='text-white font-body font-light text-base leading-[25.54px]'>$0</h1> || companyExpenses && (
        <p className='text-white font-body font-light text-base leading-[25.54px]'> { companyExpenses} </p>
         
      )}
      </div>
      
      <div className='flex border border-white p-3 flex-row justify-between'>
        <label htmlFor="" className='  text-white font-body font-light text-base leading-[25.54px]'>With Fair Split</label>
        <div>
        <p className='text-white font-body font-light text-base leading-[25.54px]'>From</p>
        <p className='text-white font-body font-light text-base leading-[25.54px]'>$0</p>
         
        <p className='text-white font-body font-light text-base leading-[25.54px]'>Per Month</p>
        </div>
      </div>
       <button className='w-full p-3 rounded-md text-white bg-[#017ea7] font-body'>Signup</button>
    </div>
  );
};

export default Calculator;