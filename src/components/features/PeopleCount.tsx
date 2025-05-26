import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/card";
import Header from "../dashboard/Header";
import PageTransition from "../animations/PageTransition";
import PassengerDataDisplay from "./PassengerDataDisplay";
import OriginDestinationForm from "./OriginDestinationForm";
import { Button } from "../ui/button";
import MapView from "../ui/map-view";

const PeopleCount = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const handleFormSubmit = (origin: string, destination: string) => {
    setOrigin(origin);
    setDestination(destination);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
        <Header />
        <div className="lg:ml-16 flex-1"> {/* Changed from ml-64 to ml-16 */}
          <main className="container mx-auto p-4 md:p-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <motion.h1
                  className="text-2xl md:text-3xl font-bold gradient-text"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Passenger Count
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Button
                    className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white"
                    onClick={() => {/* Export action */}}
                  >
                    Export Data
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6">
                <OriginDestinationForm onSubmit={handleFormSubmit} />
                <MapView title="Passenger Distribution Map" height="100%" />
              </div>

              <PassengerDataDisplay />
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default PeopleCount;
