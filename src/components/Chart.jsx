import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      data: [
        [1327359600000, 30.95],
        // More data points...
        [1361919600000, 39.60],
      ],
    }],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      // Rest of the options...
    },
    selection: 'one_year',
  });

  const updateData = (timeline) => {
    // Logic to update chart data based on timeline
    // Similar to the class component's updateData method
  };

  return (
    <div className='h-44'>
      <div id="chart" >
        <div className="toolbar">
          <button id="one_month" onClick={() => updateData('one_month')} className={chartData.selection === 'one_month' ? 'active' : ''}>
            1M
          </button>
          {/* Other buttons */}
        </div>
        <div id="chart-timeline">
          <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
