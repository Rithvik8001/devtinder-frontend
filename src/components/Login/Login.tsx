import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "@/utils/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          emailId: email,
          password,
        },
        { withCredentials: true },
      );
      dispatch(addUser(response.data));
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 404) {
          toast.error("User not found. Please check your email or sign up.");
        } else if (error.response.status === 401) {
          toast.error("Invalid credentials. Please try again.");
        } else {
          toast.error(
            error.response.data?.message ||
              error.response.data ||
              "An unexpected error occurred.",
          );
        }
      } else {
        toast.error(
          error instanceof Error
            ? error.message
            : "An error occurred during login.",
        );
      }
      return;
    }

    toast.success("Login successful");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center flex flex-row items-center justify-center gap-2">
              <Logo />
              <h1 className="text-2xl font-medium tracking-tighter">
                Login to DevTinder
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder:text-muted-foreground text-sm"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder:text-muted-foreground text-sm"
              />
              <Button type="submit">Login</Button>
            </form>
            <Separator className="my-4" />

            {/* dont have an account? */}
            <p className="text-sm text-center">
              Don&apos;t have an account? <Link to="/signup">Register</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
