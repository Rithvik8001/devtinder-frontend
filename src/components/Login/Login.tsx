import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Login successful");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
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
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
