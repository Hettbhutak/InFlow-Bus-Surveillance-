import { Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import RootLayout from "./components/layout/RootLayout";
import SimpleLoginPage from "./components/auth/SimpleLoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import StaticHomePage from "./components/static/StaticHomePage";
import StaticDashboardPage from "./components/static/StaticDashboardPage";
import StaticContactPage from "./components/static/StaticContactPage";
import StaticFeaturesPage from "./components/static/StaticFeaturesPage";
import BusTracking from "./components/features/BusTracking";
import RouteInformation from "./components/features/RouteInformation";
import PeopleCount from "./components/features/PeopleCount";
import Analytics from "./components/dashboard/AnalyticsDisplay";
import SystemStatus from "./components/dashboard/SystemStatus";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SimpleLoginPage />} />
      <Route element={<RootLayout />}>
        <Route index element={<StaticHomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <StaticDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/bus-tracking" element={<BusTracking />} />
        <Route path="/route-information" element={<RouteInformation />} />
        <Route path="/people-count" element={<PeopleCount />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/system-status" element={<SystemStatus />} />
        <Route path="/features" element={<StaticFeaturesPage />} />
        <Route path="/contact" element={<StaticContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--dark-bg-primary))]">
                <div className="text-[hsl(var(--dark-text-primary))] flex flex-col items-center">
                  <div className="w-8 h-8 border-4 border-t-blue-500 border-blue-500/30 rounded-full animate-spin mb-4"></div>
                  <p>Loading...</p>
                </div>
              </div>
            }
          >
            <AppRoutes />
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
