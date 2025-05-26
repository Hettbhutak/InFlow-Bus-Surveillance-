import React from "react";
import { Card } from "./card";
import { Map } from "lucide-react";

interface MapViewProps {
  title?: string;
  height?: string;
  showControls?: boolean;
  className?: string;
}

const MapView = ({
  title = "Live Map View",
  height = "400px",
  showControls = true,
  className = "",
}: MapViewProps) => {
  return (
    <Card className={`bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] ${className}`}>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))]">
            {title}
          </h3>
          {showControls && (
            <div className="flex items-center gap-2">
              <Map className="h-5 w-5 text-[hsl(var(--dark-accent-blue))]" />
            </div>
          )}
        </div>
        <div 
          className={`h-[${height}] bg-[hsl(var(--dark-bg-primary))] rounded-lg border border-[hsl(var(--dark-border-subtle))]`}
          style={{ backgroundImage: "url('/map-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full h-full bg-[hsl(var(--dark-bg-secondary))]/80 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-[hsl(var(--dark-text-secondary))]">Active Bus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-[hsl(var(--dark-text-secondary))]">Delayed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-[hsl(var(--dark-text-secondary))]">Bus Stop</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[hsl(var(--dark-text-secondary))]">Active Buses:</span>
                  <span className="text-sm text-[hsl(var(--dark-text-primary))]">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[hsl(var(--dark-text-secondary))]">Total Stops:</span>
                  <span className="text-sm text-[hsl(var(--dark-text-primary))]">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[hsl(var(--dark-text-secondary))]">Coverage:</span>
                  <span className="text-sm text-[hsl(var(--dark-text-primary))]">87.3 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MapView;