import React, { useState } from 'react';

const FinancialCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const interest = (principal * interestRate * duration) / 100;
    const totalAmount = Number(principal) + Number(interest);
    setResult(totalAmount.toFixed(2));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Financial Calculator</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="principal">Principal Amount ($)</label>
          <input
            id="principal"
            type="number"
            className="border border-gray-300 p-2 rounded"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            id="interestRate"
            type="number"
            className="border border-gray-300 p-2 rounded"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="duration">Duration (years)</label>
          <input
            id="duration"
            type="number"
            className="border border-gray-300 p-2 rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={calculate}
        >
          Calculate
        </button>
      </div>
      {result && (
        <div className="mt-4">
          <p className="text-lg font-bold">Total Amount: ${result}</p>
        </div>
      )}
    </div>
  );
};

export default FinancialCalculator;