import React, { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  LogOut,
  Settings,
  User,
  Eye,
  Bell,
  AlertTriangle,
  Home,
  Bus,
  Route,
  Users,
  Activity,
  BarChart,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "../../lib/auth";
import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "framer-motion";
import PreviewMode from "../preview/PreviewMode";
import { useNavigate, useLocation } from "react-router-dom";
import MobileNav from "../ui/mobile-nav";

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  onLogout?: () => void;
}

const Header = ({
  userName = "John Doe",
  userAvatar = "",
  onLogout = () => {},
}: HeaderProps) => {
  const { user } = useAuth();
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut();
      if (onLogout) onLogout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const displayName = user?.name || userName;
  const avatarUrl =
    user?.photoURL ||
    userAvatar ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${displayName}`;

  const navItems = [
    { 
      name: "Dashboard", 
      icon: <Home className="h-5 w-5" />, 
      path: "/dashboard" 
    },
    {
      name: "Bus Tracking",
      icon: <Bus className="h-5 w-5" />,
      path: "/bus-tracking"
    },
    {
      name: "Route Information",
      icon: <Route className="h-5 w-5" />,
      path: "/route-information"
    },
    {
      name: "People Count",
      icon: <Users className="h-5 w-5" />,
      path: "/people-count"
    },
    {
      name: "Analytics",
      icon: <BarChart className="h-5 w-5" />,
      path: "/analytics"
    },
    {
      name: "System Status",
      icon: <Activity className="h-5 w-5" />,
      path: "/system-status"
    }
  ];

  return (
    <>
      <motion.header
        className="w-full h-16 bg-[hsl(var(--dark-bg-secondary))] border-b border-[hsl(var(--dark-border-subtle))] flex items-center justify-between px-4 sticky top-0 z-10 shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <MobileNav onLogout={handleLogout} />
          <div
            className="h-10 w-10 bg-[hsl(var(--dark-accent-blue))] rounded-md flex items-center justify-center glow cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-white font-bold text-xl">BS</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowPreview(true)}
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
            >
              <Eye className="h-5 w-5" />
            </Button>
          </motion.div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-80 bg-[hsl(var(--dark-bg-secondary))] border border-[hsl(var(--dark-border-subtle))]"
              align="end"
            >
              <DropdownMenuLabel className="text-[hsl(var(--dark-text-primary))]">
                Notifications
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[hsl(var(--dark-border-subtle))]" />
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem className="flex items-start gap-2 p-3 cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))]">
                  <div className="bg-orange-500/20 text-orange-500 p-2 rounded-full">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[hsl(var(--dark-text-primary))]">
                      Bus #103 Maintenance Alert
                    </p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                      Scheduled maintenance required in 2 days
                    </p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                      10 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-start gap-2 p-3 cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))]">
                  <div className="bg-blue-500/20 text-blue-500 p-2 rounded-full">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[hsl(var(--dark-text-primary))]">
                      Route A1 Delay
                    </p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                      Downtown Express delayed by 10 minutes
                    </p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                      25 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="bg-[hsl(var(--dark-border-subtle))]" />
              <DropdownMenuItem className="text-center text-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-bg-primary))]">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ThemeToggle />
          </motion.div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full hover:bg-[hsl(var(--dark-bg-primary))]"
                >
                  <Avatar className="h-10 w-10 border-2 border-[hsl(var(--dark-accent-blue))] glow">
                    <AvatarImage src={avatarUrl} alt={displayName} />
                    <AvatarFallback className="bg-[hsl(var(--dark-bg-primary))] text-[hsl(var(--dark-text-primary))]">
                      {displayName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-[hsl(var(--dark-bg-secondary))] border border-[hsl(var(--dark-border-subtle))]"
              align="end"
              forceMount
            >
              <DropdownMenuLabel className="text-[hsl(var(--dark-text-primary))]">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-[hsl(var(--dark-text-primary))]">
                    {displayName}
                  </p>
                  <p className="text-xs leading-none text-[hsl(var(--dark-text-secondary))]">
                    {user?.email || "admin@bussurveillance.com"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[hsl(var(--dark-border-subtle))]" />
              <DropdownMenuItem className="cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))] text-[hsl(var(--dark-text-primary))]">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))] text-[hsl(var(--dark-text-primary))]">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[hsl(var(--dark-border-subtle))]" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))] text-[hsl(var(--dark-text-primary))]"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.header>

      {/* Icon-only Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 hidden lg:block w-16 bg-[hsl(var(--dark-bg-secondary))] border-r border-[hsl(var(--dark-border-subtle))] z-10 shadow-lg">
        <nav className="p-2">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`w-12 h-12 ${
                    location.pathname === item.path
                      ? "bg-[hsl(var(--dark-accent-blue))/10] text-[hsl(var(--dark-accent-blue))]"
                      : "text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
                  }`}
                  onClick={() => navigate(item.path)}
                  title={item.name}
                >
                  {item.icon}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
