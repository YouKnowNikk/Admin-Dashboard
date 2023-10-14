import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './analytical.css';

const AnalyticsChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('aug');
  const [chartData, setChartData] = useState({
    labels: ['1-10 Aug', '10-20 Aug', '20-30 Aug', '1-10 Nov'],
    datasets: [
      {
        label: 'Previous Month',
        data: [50, 35, 42, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Current Month',
        data: [30, 23, 56, 78],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  });

  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100, // Adjust the max value as needed
            title: {
              display: true,
              text: 'Percentage',
            },
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return (
    <div className="container">
     <div style={{display:'flex',justifyContent:'space-between'}}> <h4 className="title">Analytics</h4>
      <div className="dropdown-container">
        
        <select
          id="monthDropdown"
          value='Month'
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="aug">August</option>
          <option value="nov">November</option>
        </select>
      </div></div>
      <div className="chart-container">
        <canvas ref={chartRef} id="barChart"></canvas>
      </div>
      
    </div>
  );
};

export default AnalyticsChart;
