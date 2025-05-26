import { Outlet } from "react-router-dom";
import Header from "../dashboard/Header";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
      <Header />
      <div className="lg:ml-16 flex-1"> {/* Added flex-1 */}
        <main className="container mx-auto p-6 min-h-[calc(100vh-4rem)]"> {/* Updated height calculation */}
          <div className="h-full flex flex-col"> {/* Added flex container */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;