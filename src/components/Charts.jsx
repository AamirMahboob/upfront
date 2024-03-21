import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance
    }
  }, []);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Treasury Note',
        data: [3000, 2500, 3200, 2800, 3500, 3200],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Treasury Note Graph</h2>
      <div className="w-96 h-48">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;