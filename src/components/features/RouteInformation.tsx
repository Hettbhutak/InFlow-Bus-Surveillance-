import React from "react";
import { Card } from "../ui/card";
import { Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Header from "../dashboard/Header";
import { motion } from "framer-motion";
import PageTransition from "../animations/PageTransition";
import MapView from "../ui/map-view";

const RouteInformation = () => {
  const navigate = useNavigate();

  // Mock data for routes
  const routes = [
    {
      id: "A1",
      name: "Downtown Express",
      stops: 12,
      frequency: "10 min",
      status: "Active",
    },
    {
      id: "B2",
      name: "Airport Shuttle",
      stops: 8,
      frequency: "15 min",
      status: "Active",
    },
    {
      id: "C3",
      name: "University Line",
      stops: 10,
      frequency: "12 min",
      status: "Active",
    },
    {
      id: "D4",
      name: "Mall Connector",
      stops: 6,
      frequency: "20 min",
      status: "Active",
    },
    {
      id: "E5",
      name: "Hospital Route",
      stops: 9,
      frequency: "15 min",
      status: "Active",
    }
  ];

  // Mock data for stops on a selected route
  const routeStops = [
    { name: "Central Station", time: "5:00 AM - 11:00 PM", nextBus: "5 min" },
    { name: "City Hall", time: "5:05 AM - 11:05 PM", nextBus: "15 min" },
    { name: "Market Street", time: "5:10 AM - 11:10 PM", nextBus: "25 min" },
    {
      name: "Convention Center",
      time: "5:15 AM - 11:15 PM",
      nextBus: "35 min",
    },
    { name: "University", time: "5:20 AM - 11:20 PM", nextBus: "45 min" },
    { name: "Hospital", time: "5:25 AM - 11:25 PM", nextBus: "55 min" },
    { name: "Shopping Mall", time: "5:30 AM - 11:30 PM", nextBus: "65 min" },
    { name: "Airport", time: "5:35 AM - 11:35 PM", nextBus: "75 min" },
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
                Route Information
              </motion.h1>

              {/* Route Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {routes.map((route, index) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full p-4 bg-white shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{route.name}</h3>
                          <p className="text-sm text-gray-500">
                            Route ID: {route.id}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            Status:{" "}
                            <span
                              className={
                                route.status === "Active"
                                  ? "text-green-500"
                                  : "text-amber-500"
                              }
                            >
                              {route.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{route.stops} stops</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          <span>Every {route.frequency}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        View Details
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Route Map View */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MapView title="Route Network Map" height="400px" />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default RouteInformation;
