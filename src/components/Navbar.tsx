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
          <Link to="/" className="cursor-pointer">
            <Logo />
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
          <Link to="login">
            <Button
              onClick={() => {
                navigate("login");
                console.log("Login clicked");
              }}
              variant="outline"
              className="px-6 py-3 cursor-pointer hover:bg-gray-100"
            >
              Login
            </Button>
          </Link>
          <Link to="signup">
            <Button
              onClick={() => {
                navigate("signup");
                console.log("Signup clicked");
              }}
              variant="outline"
              className="px-6 py-3 cursor-pointer hover:bg-gray-100"
            >
              Signup
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed top-14 left-0 right-0 z-50 bg-white shadow-md">
          <div className="flex flex-col gap-2 p-4 h-full">
            <Button
              onClick={() => {
                navigate("login");
                setIsOpen(false);
              }}
              variant="outline"
              className="w-full py-3 cursor-pointer"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                navigate("signup");
                setIsOpen(false);
              }}
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
