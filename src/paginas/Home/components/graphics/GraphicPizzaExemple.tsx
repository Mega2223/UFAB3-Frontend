import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['FISS', 'AÇÕES', 'TESOURO', 'BDR', 'ETF', 'FI-INFRA'],
    datasets: [
        {
            data: [40, 50, 10, 15, 50, 25],
            backgroundColor: ['#0000FF', '#FF0000', '#FFB300', '#008000' , '#800080', '#00008B'],
            hoverOffset: 4,
        },
    ],
};

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
            const percentage = ((context.raw / total) * 100).toFixed(2);
            return `${context.label}: ${context.raw} units (${percentage}%)`;
          },
        },
      },

      datalabels: {
        display: true, 
        color: 'black', 
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`; 
        },
        font: {
          weight: 'bold',
          size: 14,
        },
        anchor: 'center', 
        align: 'center',  
      },
    },
  };

const DoughnutChart: React.FC = () => {
      return <Doughnut data={data} options={options} />;
};


const LegendTable: React.FC = () => {
    const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);

     return (
    <TableContainer component={Paper} sx={{ maxWidth: 700, marginLeft: '20px' }}>
      <Table size="small">
        <TableBody>
          {data.labels.map((label, index) => {
            const value = data.datasets[0].data[index];
            const percentage = ((value / total) * 100).toFixed(2);

            return (
              <TableRow key={index}>
                <TableCell>
                  <Typography sx={{ color: data.datasets[0].backgroundColor[index] }}>
                    {label}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                <Typography sx={{ color: data.datasets[0].backgroundColor[index] }}>
                    {value} Ativos
                  </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography sx={{ color: data.datasets[0].backgroundColor[index] }}>
                        {percentage}%
                    </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const GraphicPizzaExemple: React.FC = () => {
    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '20px', // Adiciona espaçamento entre o gráfico e a tabela
            padding: '20px',
        }}
        >
      <Box sx={{ width: 300, height: 300 }}>
        <DoughnutChart />
      </Box>
      <Box sx={{ width: 700, height: 230 }}>
        <LegendTable />
      </Box>
    </Box>
    );
  };
  
  export default GraphicPizzaExemple;