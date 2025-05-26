export const PassengerChart = () => {
  const data = [
    { label: "Mon", value: 4270 },
    { label: "Tue", value: 4520 },
    { label: "Wed", value: 4380 },
    { label: "Thu", value: 4640 },
    { label: "Fri", value: 5150 }, // Peak day
    { label: "Sat", value: 3780 },
    { label: "Sun", value: 3250 }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Weekly Passenger Count</h3>
      <div className="flex justify-between items-end space-x-4">
        {data.map((item, index) => (
          <ChartBar
            key={item.label}
            height={(item.value / 5150) * 100} // Using max value for scaling
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