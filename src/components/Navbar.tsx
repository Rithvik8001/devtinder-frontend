import { Button } from "./ui/button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="h-16 p-4 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <h1 className="text-3xl lg:text-4xl font-medium bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent tracking-tighter">
            DevTinder
          </h1>
        </div>
        <div className="lg:hidden">
          <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>
        <div className="hidden lg:flex gap-4">
          <Button variant="outline" className="px-6 py-3">
            Login
          </Button>
          <Button variant="outline" className="px-6 py-3">
            Signup
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="h-screen w-full bg-white">
          <div className="flex flex-col gap-2 p-4 h-full">
            <Button variant="outline" className="w-full py-3">
              Login
            </Button>
            <Button variant="outline" className="w-full py-3">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
