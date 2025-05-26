import React, { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { MapPin, Clock, Bus } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Add this import
import PageTransition from "../animations/PageTransition";
import Header from "../dashboard/Header";
import MapView from "../ui/map-view";

const BusTracking = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for buses
  const buses = [
    {
      id: "BUS-101",
      route: "Downtown Express (A1)",
      location: "Central Station",
      status: "On Time",
      eta: "2 min",
      passengers: 32,
      capacity: 40,
    },
    {
      id: "BUS-102",
      route: "Airport Shuttle (B2)",
      location: "Market Street",
      status: "Delayed",
      eta: "10 min",
      passengers: 35,
      capacity: 40,
    },
    {
      id: "BUS-103",
      route: "University Line (C3)",
      location: "University Campus",
      status: "On Time",
      eta: "5 min",
      passengers: 28,
      capacity: 40,
    },
    {
      id: "BUS-104",
      route: "Mall Connector (D4)",
      location: "Shopping Mall",
      status: "Early",
      eta: "1 min",
      passengers: 25,
      capacity: 40,
    },
    {
      id: "BUS-105",
      route: "Hospital Route (E5)",
      location: "City Hospital",
      status: "On Time",
      eta: "7 min",
      passengers: 30,
      capacity: 40,
    }
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
                Bus Tracking
              </motion.h1>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[hsl(var(--dark-bg-secondary))] text-[hsl(var(--dark-text-secondary))]">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
                  >
                    All Buses
                  </TabsTrigger>
                  <TabsTrigger
                    value="active"
                    className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
                  >
                    Active Routes
                  </TabsTrigger>
                  <TabsTrigger
                    value="delayed"
                    className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
                  >
                    Delayed
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {isLoading
                      ? Array(4)
                          .fill(null)
                          .map((_, index) => (
                            <Card
                              key={index}
                              className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] h-40 animate-pulse"
                            >
                              <div className="h-full w-full bg-[hsl(var(--dark-border-subtle))] opacity-20"></div>
                            </Card>
                          ))
                      : buses.map((bus, index) => (
                          <motion.div
                            key={bus.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Card className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] hover:shadow-md transition-shadow duration-300">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <div className="bg-[hsl(var(--dark-accent-blue))] p-2 rounded-full">
                                      <Bus className="h-4 w-4 text-white" />
                                    </div>
                                    <h3 className="font-medium text-lg text-[hsl(var(--dark-text-primary))]">
                                      {bus.id}
                                    </h3>
                                  </div>
                                  <p className="text-sm text-[hsl(var(--dark-text-secondary))] mt-1">
                                    {bus.route}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">
                                    Status:{" "}
                                    <span
                                      className={
                                        bus.status === "On Time"
                                          ? "text-green-500"
                                          : bus.status === "Delayed"
                                            ? "text-amber-500"
                                            : "text-blue-500"
                                      }
                                    >
                                      {bus.status}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                                    {bus.passengers}/{bus.capacity} passengers
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1 text-[hsl(var(--dark-text-secondary))]" />
                                  <span className="text-[hsl(var(--dark-text-primary))]">
                                    {bus.location}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-[hsl(var(--dark-text-secondary))]" />
                                  <span className="text-[hsl(var(--dark-text-primary))]">
                                    ETA: {bus.eta}
                                  </span>
                                </div>
                              </div>
                            </Card>
                          </motion.div>
                        ))}
                  </div>
                </TabsContent>

                <TabsContent value="active" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {isLoading
                      ? Array(3)
                          .fill(null)
                          .map((_, index) => (
                            <Card
                              key={index}
                              className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] h-40 animate-pulse"
                            >
                              <div className="h-full w-full bg-[hsl(var(--dark-border-subtle))] opacity-20"></div>
                            </Card>
                          ))
                      : buses
                          .filter((bus) => bus.status !== "Delayed")
                          .map((bus, index) => (
                            <motion.div
                              key={bus.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Card className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] hover:shadow-md transition-shadow duration-300">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <div className="bg-[hsl(var(--dark-accent-blue))] p-2 rounded-full">
                                        <Bus className="h-4 w-4 text-white" />
                                      </div>
                                      <h3 className="font-medium text-lg text-[hsl(var(--dark-text-primary))]">
                                        {bus.id}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-[hsl(var(--dark-text-secondary))] mt-1">
                                      {bus.route}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm font-medium">
                                      Status:{" "}
                                      <span
                                        className={
                                          bus.status === "On Time"
                                            ? "text-green-500"
                                            : "text-blue-500"
                                        }
                                      >
                                        {bus.status}
                                      </span>
                                    </div>
                                    <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                                      {bus.passengers}/{bus.capacity} passengers
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                                  <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1 text-[hsl(var(--dark-text-secondary))]" />
                                    <span className="text-[hsl(var(--dark-text-primary))]">
                                      {bus.location}
                                    </span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1 text-[hsl(var(--dark-text-secondary))]" />
                                    <span className="text-[hsl(var(--dark-text-primary))]">
                                      ETA: {bus.eta}
                                    </span>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          ))}
                  </div>
                </TabsContent>

                <TabsContent value="delayed" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {isLoading ? (
                      <Card className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] h-40 animate-pulse">
                        <div className="h-full w-full bg-[hsl(var(--dark-border-subtle))] opacity-20"></div>
                      </Card>
                    ) : buses.filter((bus) => bus.status === "Delayed").length ===
                      0 ? (
                      <div className="col-span-2 text-center py-12">
                        <p className="text-[hsl(var(--dark-text-secondary))]">
                          No delayed buses at this time.
                        </p>
                      </div>
                    ) : (
                      buses
                        .filter((bus) => bus.status === "Delayed")
                        .map((bus, index) => (
                          <motion.div
                            key={bus.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Card className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] hover:shadow-md transition-shadow duration-300">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <div className="bg-amber-500 p-2 rounded-full">
                                      <Bus className="h-4 w-4 text-white" />
                                    </div>
                                    <h3 className="font-medium text-lg text-[hsl(var(--dark-text-primary))]">
                                      {bus.id}
                                    </h3>
                                  </div>
                                  <p className="text-sm text-[hsl(var(--dark-text-secondary))] mt-1">
                                    {bus.route}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">
                                    Status:{" "}
                                    <span className="text-amber-500">
                                      {bus.status}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                                    {bus.passengers}/{bus.capacity} passengers
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1 text-[hsl(var(--dark-text-secondary))]" />
                                  <span className="text-[hsl(var(--dark-text-primary))]">
                                    {bus.location}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-[hsl(var(--dark-text-secondary))]" />
                                  <span className="text-[hsl(var(--dark-text-primary))]">
                                    ETA: {bus.eta}
                                  </span>
                                </div>
                              </div>
                            </Card>
                          </motion.div>
                        ))
                    )}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Live Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MapView title="Live Bus Tracking" height="500px" />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default BusTracking;
