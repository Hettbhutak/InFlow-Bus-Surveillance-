import React from 'react';
import { Card } from "../ui/card";
import { motion } from "framer-motion";

interface ChartBarProps {
  height: number;
  label: string;
  value: number;
  color?: string;
  delay?: number;
}

const ChartBar = ({ height, label, value, color = "var(--dark-accent-blue)", delay = 0 }: ChartBarProps) => (
  <div className="flex flex-col items-center">
    <div className="relative h-[200px] w-8">
      <motion.div 
        className="absolute bottom-0 w-full rounded-t"
        style={{ backgroundColor: `hsl(${color})` }}
        initial={{ height: 0 }}
        animate={{ height: `${height}%` }}
        transition={{ duration: 0.5, delay }}
      />
    </div>
    <div className="mt-2 text-xs text-[hsl(var(--dark-text-secondary))]">{label}</div>
    <div className="text-sm font-medium text-[hsl(var(--dark-text-primary))]">{value}</div>
  </div>
);

export const PassengerChart = () => {
  const data = [
    { label: "Mon", value: 850 },
    { label: "Tue", value: 920 },
    { label: "Wed", value: 880 },
    { label: "Thu", value: 940 },
    { label: "Fri", value: 1150 },
    { label: "Sat", value: 780 },
    { label: "Sun", value: 650 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Weekly Passenger Count</h3>
      <div className="flex justify-between items-end space-x-4">
        {data.map((item, index) => (
          <ChartBar
            key={item.label}
            height={(item.value / maxValue) * 100}
            label={item.label}
            value={item.value}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Card>
  );
};

export const RoutePerformance = () => {
  const data = [
    { label: "A1", value: 92, color: "var(--dark-accent-blue)" },
    { label: "B2", value: 85, color: "var(--dark-accent-purple)" },
    { label: "C3", value: 88, color: "var(--dark-accent-teal)" },
    { label: "D4", value: 95, color: "var(--dark-accent-blue)" },
    { label: "E5", value: 90, color: "var(--dark-accent-purple)" }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Route Performance (%)</h3>
      <div className="flex justify-between items-end space-x-4">
        {data.map((item, index) => (
          <ChartBar
            key={item.label}
            height={item.value}
            label={item.label}
            value={item.value}
            color={item.color}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Card>
  );
};

const Analytics = () => {
  return (
    <Card className="w-full bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] shadow-md">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-bold text-[hsl(var(--dark-text-primary))]">
            <span className="gradient-text">Analytics Overview</span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Passenger Flow Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-6 text-[hsl(var(--dark-text-primary))]">
              Passenger Flow
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyPassengerData}>
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

          {/* Route Performance Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-6 text-[hsl(var(--dark-text-primary))]">
              Route Distribution
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={passengerDistributionData}>
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
        </div>
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <AnalyticsCard
            title="Total Passengers"
            value="4,826"
            description="Today's total"
            icon={<Users className="h-5 w-5" />}
            trend="up"
            trendValue="+12%"
          />
          <AnalyticsCard
            title="Average Load"
            value="68%"
            description="Across all routes"
            icon={<Activity className="h-5 w-5" />}
            trend="up"
            trendValue="+5%"
          />
          <AnalyticsCard
            title="On-Time Rate"
            value="94%"
            description="All routes"
            icon={<Clock className="h-5 w-5" />}
            trend="up"
            trendValue="+2%"
          />
          <AnalyticsCard
            title="Incidents"
            value="3"
            description="Last 24 hours"
            icon={<AlertTriangle className="h-5 w-5" />}
            trend="down"
            trendValue="-25%"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Analytics;