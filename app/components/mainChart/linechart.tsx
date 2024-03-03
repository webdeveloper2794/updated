import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function LineChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let newChart: Chart | null = null;

    if (chartRef.current) {
      const context = chartRef.current.getContext('2d');
      if (context) {
        newChart = new Chart(context, {
          type: 'line',
          data: {
            labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
            datasets: [
              {
                label: '',
                data: [0, 250, 500, 750, 1000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(107, 76, 125,0.8)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: 'linear',
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
