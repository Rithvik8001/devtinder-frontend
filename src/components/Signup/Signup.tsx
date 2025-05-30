import Logo from "../Logo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !age ||
      !gender
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    // Perform signup logic here
    toast.success("Signup successful, please login");
    navigate("/login");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)]">
      <div className="w-full max-w-md">
        <div className="p-4">
          <Card>
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
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Select
                  value={gender}
                  onValueChange={(value) => setGender(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="About"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="placeholder:text-muted-foreground text-sm"
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Signing up..." : "Signup"}
                </Button>
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
    </div>
  );
}
