import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, ArrowRight, Map } from "lucide-react";
import { motion } from "framer-motion";

interface OriginDestinationFormProps {
  onSubmit?: (origin: string, destination: string) => void;
  busStops?: Array<{ id: string; name: string }>;
  isLoading?: boolean;
}

const OriginDestinationForm = ({
  onSubmit = () => {},
  busStops = [
    { id: "all", name: "All Locations" }, // Changed from empty string to "all"
    { id: "1", name: "Downtown Terminal" },
    { id: "2", name: "University Campus" },
    { id: "3", name: "Shopping Mall" },
    { id: "4", name: "Hospital" },
    { id: "5", name: "Airport" },
    { id: "6", name: "Residential Area" },
  ],
  isLoading = false,
}: OriginDestinationFormProps) => {
  const [origin, setOrigin] = React.useState<string>("all"); // Set default value
  const [destination, setDestination] = React.useState<string>("all"); // Set default value

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(origin, destination);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full" // Added full width
    >
      <Card className="w-full bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6">
          {/* Form Section */}
          <div className="p-6 border-r border-[hsl(var(--dark-border-subtle))]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-medium mb-4 text-[hsl(var(--dark-text-primary))]">
                Filter Passenger Data
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div className="space-y-2">
                  <Label
                    htmlFor="origin"
                    className="text-[hsl(var(--dark-text-secondary))]"
                  >
                    Origin
                  </Label>
                  <Select value={origin} onValueChange={setOrigin}>
                    <SelectTrigger
                      id="origin"
                      className="w-full bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-primary))]"
                    >
                      <SelectValue placeholder="Select origin stop" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                      {busStops.map((stop) => (
                        <SelectItem
                          key={stop.id}
                          value={stop.id}
                          className="text-[hsl(var(--dark-text-primary))]"
                        >
                          {stop.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-[hsl(var(--dark-text-secondary))]" />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="destination"
                    className="text-[hsl(var(--dark-text-secondary))]"
                  >
                    Destination
                  </Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger
                      id="destination"
                      className="w-full bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-primary))]"
                    >
                      <SelectValue placeholder="Select destination stop" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                      {busStops.map((stop) => (
                        <SelectItem
                          key={stop.id}
                          value={stop.id}
                          className="text-[hsl(var(--dark-text-primary))]"
                        >
                          {stop.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                  {origin === "" && destination === ""
                    ? "Showing all passenger data for today"
                    : `Filtering passengers from ${
                        origin
                          ? busStops.find((s) => s.id === origin)?.name
                          : "any origin"
                      } to ${
                        destination
                          ? busStops.find((s) => s.id === destination)?.name
                          : "any destination"
                      }`}
                </p>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white flex items-center gap-2"
                >
                  <Search size={16} />
                  {isLoading ? "Loading..." : "Filter Data"}
                </Button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))]">
                Route Map
              </h3>
              <Map className="h-5 w-5 text-[hsl(var(--dark-accent-blue))]" />
            </div>
            <div className="h-[400px] bg-[hsl(var(--dark-bg-primary))] rounded-lg border border-[hsl(var(--dark-border-subtle))]">
              {/* Map Component will go here */}
              <div className="w-full h-full flex items-center justify-center text-[hsl(var(--dark-text-secondary))]">
                Map view coming soon
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default OriginDestinationForm;
