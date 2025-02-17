import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Select, MenuItem } from '@mui/material';

const SalesGraph = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  
  const sampleData = {
    weekly: [
      { day: 'Lun', amount: 2400 },
      { day: 'Mar', amount: 1398 },
      { day: 'Mie', amount: 9800 },
      { day: 'Jue', amount: 3908 },
      { day: 'Vie', amount: 4800 },
      { day: 'Sab', amount: 3800 },
      { day: 'Dom', amount: 4300 },
    ],
    monthly: Array.from({length: 30}, (_, i) => ({
      day: i + 1,
      amount: Math.floor(Math.random() * 5000) + 1000
    })),
    annual: Array.from({length: 12}, (_, i) => ({
      month: i + 1,
      amount: Math.floor(Math.random() * 30000) + 10000
    }))
  };

  const currentData = timeFrame === 'weekly' 
    ? sampleData.weekly 
    : timeFrame === 'monthly' 
    ? sampleData.monthly 
    : sampleData.annual;

  return (
    <div className='sales_graph'>
      <div style={{ position: 'absolute', top: 10, right: 50, zIndex: 1 }}>
        <Select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          variant='outlined'
          size='small'
          sx={{
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.23)',
            }
          }}
        >
          <MenuItem value='weekly'>Semanal</MenuItem>
          <MenuItem value='monthly'>Mensual</MenuItem>
          <MenuItem value='annual'>Anual</MenuItem>
        </Select>
      </div>
      
      <ResponsiveContainer width="90%" height="80%">
        <LineChart data={currentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis 
            dataKey={timeFrame === 'annual' ? 'month' : 'day'} 
            stroke="rgba(255, 255, 255, 0.5)"
          />
          <YAxis stroke="rgba(255, 255, 255, 0.5)" />
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#00bcd4" 
            strokeWidth={2}
            dot={{ fill: '#00bcd4' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesGraph;