import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />

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

          <div className="relative z-10 flex-1 flex items-center justify-center flex-col gap-4">
            <div className="text-center p-2">
              <div className="flex justify-center items-center mb-4">
                <h1 className="text-5xl lg:text-5xl font-bold tracking-tighter text-gray-800">
                  DevTinder
                </h1>
              </div>
              <h2 className="text-2xl lg:text-4xl font-light tracking-tighter">
                Discover Developers, Build Connections
              </h2>
              <p className="text-lg text-gray-400 mt-2">
                Connect with like-minded developers, share ideas, and grow
                ogether.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/login">
                <Button className="cursor-pointer hover:bg-gray-100 px-7 py-4">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
