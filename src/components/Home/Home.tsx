import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <Outlet />
        <div className="flex-1 flex flex-col relative">
          {/* Grid background */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-repeat opacity-95"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(200, 200, 200, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.2) 1px, transparent 1px)",
                backgroundSize: "1.25rem 1.25rem", // 20px grid
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
