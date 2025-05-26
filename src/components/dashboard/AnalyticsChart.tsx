import React from 'react';
import { Card } from "../ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const hourlyData = [
  { time: '6 AM', passengers: 120 },
  { time: '7 AM', passengers: 350 },
  { time: '8 AM', passengers: 580 },
  { time: '9 AM', passengers: 420 },
  { time: '10 AM', passengers: 280 },
  { time: '11 AM', passengers: 220 },
  { time: '12 PM', passengers: 310 },
  { time: '1 PM', passengers: 340 },
  { time: '2 PM', passengers: 290 },
  { time: '3 PM', passengers: 320 },
  { time: '4 PM', passengers: 490 },
  { time: '5 PM', passengers: 570 },
  { time: '6 PM', passengers: 430 },
  { time: '7 PM', passengers: 250 },
  { time: '8 PM', passengers: 180 },
  { time: '9 PM', passengers: 120 }
];

export const PassengerFlowChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6 text-[hsl(var(--dark-text-primary))]">
        Passenger Flow
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--dark-border-subtle))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--dark-text-secondary))"
              tick={{ fill: 'hsl(var(--dark-text-secondary))' }}
            />
            <YAxis 
              stroke="hsl(var(--dark-text-secondary))"
              tick={{ fill: 'hsl(var(--dark-text-secondary))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--dark-bg-secondary))',
                border: '1px solid hsl(var(--dark-border-subtle))',
                color: 'hsl(var(--dark-text-primary))'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="passengers" 
              stroke="hsl(var(--dark-accent-blue))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export const PassengerDistribution = () => {
  const routeData = [
    { route: 'Downtown Express', passengers: 1580, color: 'hsl(var(--dark-accent-blue))' },
    { route: 'Airport Shuttle', passengers: 1250, color: 'hsl(var(--dark-accent-purple))' },
    { route: 'University Line', passengers: 980, color: 'hsl(var(--dark-accent-teal))' },
    { route: 'Mall Connector', passengers: 650, color: 'hsl(var(--dark-accent-blue))' },
    { route: 'Hospital Route', passengers: 410, color: 'hsl(var(--dark-accent-purple))' }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6 text-[hsl(var(--dark-text-primary))]">
        Passenger Distribution by Route
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={routeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--dark-border-subtle))" />
            <XAxis 
              dataKey="route" 
              stroke="hsl(var(--dark-text-secondary))"
              tick={{ fill: 'hsl(var(--dark-text-secondary))' }}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis 
              stroke="hsl(var(--dark-text-secondary))"
              tick={{ fill: 'hsl(var(--dark-text-secondary))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--dark-bg-secondary))',
                border: '1px solid hsl(var(--dark-border-subtle))',
                color: 'hsl(var(--dark-text-primary))'
              }}
            />
            <Bar 
              dataKey="passengers" 
              fill="hsl(var(--dark-accent-blue))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};