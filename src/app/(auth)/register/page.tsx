"use client";

import { doctorSchema, patientSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, UserCheck, UserPlus } from "lucide-react";

const Register = () => {
  const [activeTab, setActiveTab] = useState("patient");

  const specializations = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Neurology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
  ];
  type PatientForm = z.infer<typeof patientSchema>;
  type DoctorForm = z.infer<typeof doctorSchema>;

  const patientForm = useForm<PatientForm>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photo_url: "",
    },
  });

  const doctorForm = useForm<DoctorForm>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      specialization: "",
      photo_url: "",
    },
  });

  const onPatientSubmit = (data: PatientForm) => {
    console.log(data);
  };

  const onDoctorSubmit = (data: DoctorForm) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 pt-40">
        <div className="w-full max-w-lg space-y-6 border border-white/40 p-6 rounded-2xl">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Join DocAppoint
            </h1>
            <p className="text-white/80">Create your account to get started</p>
          </div>

          {/* Registration Form */}
          <Card className="shadow-large border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                Choose your account type and fill in your details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="patient"
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Patient
                  </TabsTrigger>
                  <TabsTrigger
                    value="doctor"
                    className="flex items-center gap-2"
                  >
                    <UserCheck className="h-4 w-4" />
                    Doctor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="patient" className="mt-4">
                  <Form {...patientForm}>
                    <form
                      onSubmit={patientForm.handleSubmit(onPatientSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={patientForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={patientForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={patientForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Create a password"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={patientForm.control}
                        name="photo_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Profile Photo URL (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        // disabled={patientMutation.isPending}
                      >
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Patient Account
                        {/* {patientMutation.isPending ? (
                          <LoadingSpinner />
                        ) : (
                          <>
                            <UserPlus className="mr-2 h-4 w-4" />
                            Create Patient Account
                          </>
                        )} */}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="doctor" className="mt-4">
                  <Form {...doctorForm}>
                    <form
                      onSubmit={doctorForm.handleSubmit(onDoctorSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={doctorForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={doctorForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={doctorForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Create a password"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={doctorForm.control}
                        name="specialization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specialization</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select your specialization" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {specializations?.map((spec: string) => (
                                  <SelectItem key={spec} value={spec}>
                                    {spec}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={doctorForm.control}
                        name="photo_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Profile Photo URL (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                {...field}
                                className=""
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        // disabled={doctorMutation.isPending}
                      >
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Doctor Account
                        {/* {doctorMutation.isPending ? (
                        <>
                        <p>Loading...</p>
                        </>
                      ) : (
                        <>
                          <UserPlus className="mr-2 h-4 w-4" />
                          Create Doctor Account
                        </>
                      )} */}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in here
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

export default Register;
