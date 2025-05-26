import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export const PassengerDistributionChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={passengerDistributionData} layout="vertical">
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="hsl(var(--dark-border-subtle))" 
          horizontal={true}
          vertical={false}
        />
        <XAxis 
          type="number"
          stroke="hsl(var(--dark-text-secondary))"
          tick={{ fill: 'hsl(var(--dark-text-secondary))' }}
        />
        <YAxis 
          dataKey="route" 
          type="category"
          stroke="hsl(var(--dark-text-secondary))"
          tick={{ fill: 'hsl(var(--dark-text-secondary))' }}
          width={150}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--dark-bg-secondary))',
            border: '1px solid hsl(var(--dark-border-subtle))',
            color: 'hsl(var(--dark-text-primary))'
          }}
          formatter={(value: number, name: string) => [
            `${value} passengers (${passengerDistributionData.find(d => d.passengers === value)?.percentage}%)`,
            'Count'
          ]}
        />
        <Bar 
          dataKey="passengers" 
          fill="hsl(var(--dark-accent-blue))"
          radius={[0, 4, 4, 0]}
        >
          {passengerDistributionData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`}
              fill={`hsl(var(--dark-accent-${
                index === 0 ? 'blue' :
                index === 1 ? 'purple' :
                index === 2 ? 'teal' :
                index === 3 ? 'green' :
                'red'
              }))`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

<TabsContent value="passengers">
  {/* ... existing analytics cards ... */}

  <div className="mt-6">
    <h3 className="text-lg font-medium mb-4 text-[hsl(var(--dark-text-primary))]">
      Passenger Distribution by Route
    </h3>
    <div className="h-[300px] bg-[hsl(var(--dark-bg-primary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-4">
      <PassengerDistributionChart />
    </div>
  </div>
</TabsContent>