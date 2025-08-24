import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";



export function LoginBox() {
    const navigate = useNavigate();
  return (
    <Card className="w-full max-w-[490px]">
      <CardHeader>
        <CardTitle className="flex font-bold text-5xl">Welcome Back</CardTitle>
        <CardDescription className="flex text-xs">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="xyz@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="font-thin">
          Don't have an account?
          <Button variant="link" onClick={()=>{
            navigate("/signup");
          }} className="-mx-2">
            Sign Up
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
