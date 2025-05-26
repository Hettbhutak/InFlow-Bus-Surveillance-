import React from "react";
import { Card } from "../ui/card";
import { CheckCircle, AlertCircle, Clock, Bus } from "lucide-react";
import Header from "./Header";
import PageTransition from "../animations/PageTransition";
import { motion } from "framer-motion";

const SystemStatus = () => {
  const systemComponents = [
    {
      name: "Bus Tracking System",
      status: "Operational",
      uptime: "99.9%",
      lastChecked: "2 minutes ago",
      icon: <Bus className="h-5 w-5" />,
    },
    {
      name: "GPS Network",
      status: "Operational",
      uptime: "99.8%",
      lastChecked: "1 minute ago",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      name: "Passenger Counter",
      status: "Operational",
      uptime: "99.7%",
      lastChecked: "3 minutes ago",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      name: "Route Management",
      status: "Minor Issues",
      uptime: "98.5%",
      lastChecked: "5 minutes ago",
      icon: <AlertCircle className="h-5 w-5" />,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
        <Header />
        <div className="lg:ml-16 flex-1">
          <main className="container mx-auto p-4 md:p-6">
            <div className="space-y-6">
              <motion.h1
                className="text-2xl md:text-3xl font-bold gradient-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                System Status
              </motion.h1>

              {/* Status Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {systemComponents.map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                      <div className="p-4 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))]">
                              {component.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  component.status === "Operational"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {component.status}
                              </span>
                              <span className="text-sm text-[hsl(var(--dark-text-secondary))]">
                                Uptime: {component.uptime}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`${
                              component.status === "Operational"
                                ? "text-green-500"
                                : "text-yellow-500"
                            }`}
                          >
                            {component.icon}
                          </div>
                        </div>
                        <div className="mt-auto pt-4 flex items-center text-sm text-[hsl(var(--dark-text-secondary))]">
                          <Clock className="h-4 w-4 mr-1" />
                          Last checked: {component.lastChecked}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* System Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-4">
                      System Metrics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Metric Cards */}
                      <div className="p-4 bg-[hsl(var(--dark-bg-primary))] rounded-lg">
                        <div className="text-sm text-[hsl(var(--dark-text-secondary))]">
                          Average Response Time
                        </div>
                        <div className="text-2xl font-bold text-[hsl(var(--dark-text-primary))]">
                          45ms
                        </div>
                      </div>
                      <div className="p-4 bg-[hsl(var(--dark-bg-primary))] rounded-lg">
                        <div className="text-sm text-[hsl(var(--dark-text-secondary))]">
                          Active Connections
                        </div>
                        <div className="text-2xl font-bold text-[hsl(var(--dark-text-primary))]">
                          1,248
                        </div>
                      </div>
                      <div className="p-4 bg-[hsl(var(--dark-bg-primary))] rounded-lg">
                        <div className="text-sm text-[hsl(var(--dark-text-secondary))]">
                          Error Rate
                        </div>
                        <div className="text-2xl font-bold text-[hsl(var(--dark-text-primary))]">
                          0.02%
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default SystemStatus;