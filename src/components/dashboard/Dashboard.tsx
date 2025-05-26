import React, { useEffect, useState } from "react";
import Header from "./Header";
import BusTrackingTile from "./BusTrackingTile";
import RouteInfoTile from "./RouteInfoTile";
import PeopleCountTile from "./PeopleCountTile";
import Analytics from "../features/Analytics";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { AlertTriangle, Bell, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../animations/PageTransition";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show alert after 5 seconds
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleIncidentReportClick = () => {
    navigate("/incident-reporting");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
        <Header />
        <div className="lg:ml-16">
          <main className="container mx-auto p-6">
            <div className="flex flex-col gap-6 h-full">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <motion.h1
                  className="text-3xl font-bold gradient-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Dashboard
                </motion.h1>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Button
                    className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Report Incident
                  </Button>
                </motion.div>
              </div>

              {/* Alert Section */}
              {showAlert && (
                <motion.div
                  className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 flex items-start gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-yellow-500 mt-1">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[hsl(var(--dark-text-primary))]">
                      Maintenance Alert
                    </h3>
                    <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
                      Bus #103 on Downtown Express route requires scheduled
                      maintenance in 2 days. Please review maintenance schedule.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAlert(false)}
                    className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-yellow-500/10"
                  >
                    Dismiss
                  </Button>
                </motion.div>
              )}

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <BusTrackingTile />
                </motion.div>

                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <RouteInfoTile />
                </motion.div>

                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <PeopleCountTile />
                </motion.div>
              </div>

              {/* Analytics Section */}
              <div className="mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Analytics />
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
