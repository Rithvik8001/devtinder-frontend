import { Button } from "./ui/button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"; // adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);

  // const handleLogout = () => {
  //   console.log("Logging out...");
  //   navigate("/login");
  // };

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

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 cursor-pointer">
                  <Avatar>
                    <AvatarImage
                      src={user.photoUrl}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                  </Avatar>
                  <span>Welcome {user.firstName}</span>
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-40 p-0">
                <div className="flex flex-col">
                  <button
                    className="px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      navigate("/settings");
                    }}
                  >
                    Settings
                  </button>
                  <button
                    className="px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                    // onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Button
                onClick={() => navigate("login")}
                variant="outline"
                className="cursor-pointer"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("signup")}
                variant="outline"
                className="cursor-pointer"
              >
                Signup
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed top-14 left-0 right-0 z-50 bg-white shadow-md">
          <div className="flex flex-col gap-2 p-4 h-full">
            {user ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2 cursor-pointer">
                    <Avatar>
                      <AvatarImage
                        src={user.photoUrl}
                        alt={`${user.firstName} ${user.lastName}`}
                      />
                    </Avatar>
                    <span>Welcome {user.firstName}</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-full p-0">
                  <div className="flex flex-col">
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-100"
                      onClick={() => {
                        navigate("/profile");
                        setIsOpen(false);
                      }}
                    >
                      Profile
                    </button>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-100"
                      onClick={() => {
                        navigate("/settings");
                        setIsOpen(false);
                      }}
                    >
                      Settings
                    </button>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-100 text-red-600"
                      onClick={() => {
                        // handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
