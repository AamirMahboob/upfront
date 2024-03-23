import React, { useState } from 'react'
import FinancialCalculator from './FinancialCalculator'
import Button from '../resusable/Button';
import Chart from './Chart';

const Graph = () => {
    const [selectedOption, setSelectedOption] = useState('MarketData');

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
  };
  return (
    <div className=' mx-10'>
         <div className="flex gap-10 justify-center items-center bg-[#F5F5F5] p-3  border-b-[2px] border-b-[#03045E] ">
      <select
        className="bg-white   rounded-lg py-2 px-4 text-lg font-semibold focus:outline-none   "
        name="Market Data"
        id="MarketData"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option className="text-[30px]">Market Data</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
      </select>
      <h1>
        S&P 500 movers
      </h1>
      <h1>
         URI 13.0%
      </h1>
      <h1>
         AAl 10.3%
      </h1>
      <h1>
         IBM 10.3%
      </h1>
      <h1>
         TSLA 10.3%
      </h1>
      <h1>
         HUM 10.3%
      </h1>
      <h1>
         NOC -10.3%
      </h1>
      <h1>
         BA 10.3%
      </h1>
    </div>
    <div  className='flex flex-row gap-3 p-3'>
        <Button isVisible={true} isWhiteText={false} value={'Switch Quote'} style={'border border-gray'} /> 
        <Button isVisible={true} isWhiteText={true} value={'THUMBSD10Y'} />
        
    </div>
    <h1 className='font-semibold text-[39.81px] leading-[36px] text-black font-heading'>U.S 10 Year Treasury Note</h1>
    <div className='flex gap-5 '>
    <div className=' w-[40%] h-[24rem] relative border-t-[3px] border-b-[3px]     mt-3   text-right' >
       <p className='font-body text-[4rem]'>3.678%</p>
       <select name="" id="" className='bg-white font-body   rounded-lg py-2 px-4 text-lg font-semibold focus:outline-none '>
         <option className='text-[2rem]' value="">-0.013</option>
       </select>
       <p className='font-body'>Last Updated: Jan 25, 2024  4:20 p.m EST</p>
       <p className='text-left absolute bottom-0  font-body text-[1.3rem]'>Previous Close</p>
    </div>
    <div className='w-[70%] h-[24rem]  mt-3  border-t-[3px] border-b-[3px]  '>
    
    <Chart />
    </div>
    </div>
    
    </div>
  )
}

export default Graph