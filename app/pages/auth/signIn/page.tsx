import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, MailPlus, Twitter } from "lucide-react";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/3 flex justify-center items-center h-full gap-5">
        <div className="space-y-5">
          <h1 className="text-center text-4xl font-extrabold text-green-400">
            Sign In to get Started!
          </h1>
          <div className="flex gap-5 justify-center">
            <Facebook
              className="border-green-400 border-2  rounded-full p-1 text-green-400"
              size={40}
            />
            <Twitter
              className="border-green-400 border-2  rounded-full p-1 text-green-400"
              size={40}
            />
            <MailPlus
              className="border-green-400 border-2  rounded-full p-1 text-green-400"
              size={40}
            />
          </div>
          <p className="text-center text-sm text-gray-400">
            or use your email to sign in
          </p>
          <Input
            type="email"
            placeholder="Email"
            className="bg-gray-200 font-bold"
          />
          <Input
            type="password"
            placeholder="password"
            className="bg-gray-200 font-bold"
          />
          <div className="flex justify-center">
            <Button className="rounded-full bg-green-400">Sign In</Button>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full flex justify-center items-center bg-green-300">
        <div className="p-5 space-y-5">
          <h1 className="text-center text-3xl font-bold">Hello, Sir!</h1>
          <p className="text-center">
            if you haven't signed up, you can easily do so by pressing the
            button below
          </p>
          <div className="flex justify-center">
            <Button className="border-1 border-white" variant="ghost" asChild>
              <Link href="/pages/auth/signUp">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
