import { Button } from "./ui/button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <nav className="h-14 p-2 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold flex items-center gap-2">
          <Logo />
          <Link to="/" className="cursor-pointer">
            <h1 className={`text-3xl lg:text-4xl font-medium tracking-tighter`}>
              DevTinder
            </h1>
          </Link>
        </div>
        <div className="lg:hidden">
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>
        <div className="hidden lg:flex gap-4">
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="px-6 py-3"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            variant="outline"
            className="px-6 py-3"
          >
            Signup
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="h-screen w-full bg-white">
          <div className="flex flex-col gap-2 p-4 h-full">
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="w-full py-3 cursor-pointer"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              className="w-full py-3 cursor-pointer"
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
