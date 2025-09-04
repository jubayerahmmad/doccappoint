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
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<"DOCTOR" | "PATIENT">(
    "PATIENT"
  );

  const router = useRouter();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "PATIENT",
    },
  });

  // login functionality(Mutations using tanstack)
  const loginMutation = useMutation({
    mutationFn: async (payload: LoginForm) => {
      const res = await axiosInstance.post("/auth/login", payload);
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.token);
      localStorage.setItem("user", JSON.stringify(data?.data?.user));

      toast.success("Login successful");
      router.push("/");
      router.refresh();
    },
    onError: () => {
      toast.error("Login failed!");
      console.log("Login request failed");
    },
  });

  // Submit handler
  const onSubmit = (data: LoginForm) => {
    const formData = { ...data, role: selectedRole };
    loginMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 pt-40 md:pt-28">
        <div className="w-full max-w-lg space-y-6  border border-white/40 p-6 rounded-2xl">
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
              className={`h-16 flex flex-col gap-1 ${
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
              className={`h-16 flex flex-col gap-1 ${
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
                  <Button type="submit" className="w-full">
                    Sign In
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
