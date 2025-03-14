import { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@genii/ui";

export const metadata: Metadata = {
  title: "Login | Genii",
  description: "Login to your Genii account",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-900">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Login</Button>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
