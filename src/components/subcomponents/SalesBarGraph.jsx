import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Select, MenuItem } from '@mui/material';

const SalesBarGraph = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  
  // Datos de ejemplo
  const productData = {
    weekly: [
      { name: 'Pizza', ventas: 2400 },
      { name: 'Panzeroti', ventas: 1398 },
      { name: 'Bebidas', ventas: 9800 },
      { name: 'Desgranado', ventas: 3908 },
      { name: 'Lasagna', ventas: 4800 },
    ],
    monthly: [
      { name: 'Pizza', ventas: 15400 },
      { name: 'Panzeroti', ventas: 8900 },
      { name: 'Bebidas', ventas: 43200 },
      { name: 'Desgranado', ventas: 12800 },
      { name: 'Lasagna', ventas: 21500 },
    ],
    annual: [
      { name: 'Pizza', ventas: 185000 },
      { name: 'Panzeroti', ventas: 103000 },
      { name: 'Bebidas', ventas: 458000 },
      { name: 'Desgranado', ventas: 156000 },
      { name: 'Lasagna', ventas: 279000 },
    ]
  };

  // Corregido: eliminar la sintaxis de TypeScript
  const currentData = productData[timeFrame];

  return (
    <div className='sales_graph'>
      <div style={{ position: 'absolute', top: 10, right: 20, zIndex: 1 }}>
        <Select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          variant='outlined'
          size='small'
          sx={{
            color: 'white',
            fontSize: '0.75rem',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.23)',
            },
            '& .MuiSelect-select': {
              padding: '2px 8px',
              height: '30px',
            }
          }}
        >
          <MenuItem value='weekly' sx={{ fontSize: '0.75rem' }}>Semanal</MenuItem>
          <MenuItem value='monthly' sx={{ fontSize: '0.75rem' }}>Mensual</MenuItem>
          <MenuItem value='annual' sx={{ fontSize: '0.75rem' }}>Anual</MenuItem>
        </Select>
      </div>
      
      <ResponsiveContainer width="90%" height="80%">
        <BarChart data={currentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis 
            dataKey="name" 
            stroke="rgba(255, 255, 255, 0.5)"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="rgba(255, 255, 255, 0.5)"
            tickFormatter={(value) => `$${value}`}
          />
          <Bar 
            dataKey="ventas" 
            fill="#2196F3" 
            radius={[4, 4, 0, 0]}
            barSize={timeFrame === 'weekly' ? 30 : 40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesBarGraph;