import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Bus,
  Users,
  Route,
  Clock,
  TrendingUp,
  Activity,
  MapPin,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
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
import { PassengerFlowChart, PassengerDistribution } from './AnalyticsChart';

// Daily passenger data
const hourlyPassengerData = [
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

// Route performance data
const routeData = [
  { route: 'A1', performance: 92, capacity: 85 },
  { route: 'B2', performance: 85, capacity: 78 },
  { route: 'C3', performance: 88, capacity: 82 },
  { route: 'D4', performance: 95, capacity: 88 },
  { route: 'E5', performance: 90, capacity: 84 }
];

// Add this after the existing route data
const passengerDistributionData = [
  { route: 'Downtown Express (A1)', passengers: 1580, percentage: 32 },
  { route: 'Airport Shuttle (B2)', passengers: 1250, percentage: 26 },
  { route: 'University Line (C3)', passengers: 980, percentage: 20 },
  { route: 'Mall Connector (D4)', passengers: 650, percentage: 13 },
  { route: 'Hospital Route (E5)', passengers: 410, percentage: 9 }
];

export const PassengerChart = () => {
  return (
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
  );
};

export const RoutePerformanceChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6 text-[hsl(var(--dark-text-primary))]">
        Route Performance
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={routeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--dark-border-subtle))" />
            <XAxis 
              dataKey="route" 
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
            <Bar 
              dataKey="performance" 
              fill="hsl(var(--dark-accent-blue))"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="capacity" 
              fill="hsl(var(--dark-accent-purple))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

const AnalyticsCard = ({
  title,
  value,
  description,
  icon,
  trend = "neutral",
  trendValue,
  delay = 0,
}: AnalyticsCardProps) => {
  const trendColor =
    trend === "up"
      ? "text-green-500"
      : trend === "down"
        ? "text-red-500"
        : "text-blue-500";
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-md font-medium text-[hsl(var(--dark-text-secondary))]">
              {title}
            </CardTitle>
            <div className="text-[hsl(var(--dark-accent-blue))]">{icon}</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-[hsl(var(--dark-text-primary))]">
              {value}
            </div>
            {description && (
              <div className="flex items-center mt-1">
                <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                  {description}
                </p>
                {trendValue && (
                  <span
                    className={`ml-2 text-xs ${trendColor} flex items-center`}
                  >
                    {trendIcon} {trendValue}
                  </span>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <div className="h-1 w-full bg-[hsl(var(--dark-border-subtle))]">
          <motion.div
            className="h-1 bg-[hsl(var(--dark-accent-blue))]"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
          />
        </div>
      </Card>
    </motion.div>
  );
};

const AnalyticsDisplay = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("today");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Card className="w-full bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] shadow-md">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-bold text-[hsl(var(--dark-text-primary))]">
            <span className="gradient-text">System Analytics</span>
          </CardTitle>
          <div className="flex items-center gap-4">
            <Select
              value={selectedTimeframe}
              onValueChange={setSelectedTimeframe}
            >
              <SelectTrigger className="w-[180px] bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <PassengerFlowChart />
          <PassengerDistribution />
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

export default AnalyticsDisplay;
