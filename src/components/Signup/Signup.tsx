import Logo from "../Logo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Signup successful");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)]">
      <div className="w-full max-w-md">
        <Card className="">
          <CardHeader>
            <CardTitle className="text-center flex flex-row items-center justify-center gap-2">
              <Logo />
              <h1 className="text-2xl font-medium tracking-tighter">
                Signup to DevTinder
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
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit">Signup</Button>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
