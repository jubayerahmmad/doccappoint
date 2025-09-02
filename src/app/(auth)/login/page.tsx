"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/schema";
import { User, UserCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<"DOCTOR" | "PATIENT">(
    "PATIENT"
  );

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "PATIENT",
    },
  });

  const onSubmit = (data: LoginForm) => {
    const formData = { ...data, role: selectedRole };
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center pt-24">
        <div className="w-full max-w-md space-y-6  border border-white/40 p-6 rounded-2xl">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Sign In to DocAppoint
            </h1>
            <p className="text-white/80">
              Sign in to manage your healthcare appointments
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant={selectedRole === "PATIENT" ? "default" : "secondary"}
              className={`h-16 flex flex-col gap-1 transition-smooth ${
                selectedRole === "PATIENT"
                  ? "bg-white text-primary hover:bg-white"
                  : "bg-white/10 text-white"
              }`}
              onClick={() => setSelectedRole("PATIENT")}
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Patient</span>
            </Button>
            <Button
              type="button"
              variant={selectedRole === "DOCTOR" ? "default" : "secondary"}
              className={`h-16 flex flex-col gap-1 transition-smooth ${
                selectedRole === "DOCTOR"
                  ? "bg-white text-primary hover:bg-white"
                  : "bg-white/10 text-white"
              }`}
              onClick={() => setSelectedRole("DOCTOR")}
            >
              <UserCheck className="h-5 w-5" />
              <span className="text-sm font-medium">Doctor</span>
            </Button>
          </div>

          {/* Login Form */}
          <Card className="">
            <CardHeader className="text-center pb-4">
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    // disabled={loginMutation.isPending}
                  >
                    Sign In
                    {/* {loginMutation.isPending ? (
                      <>
                        <p>Loading..</p>
                      </>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </>
                    )} */}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Do not have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
