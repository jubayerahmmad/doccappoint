/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import z from "zod";
// import Banner from "./_component/Banner";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { Doctor } from "@/types/types";
import {
  Badge,
  Calendar,
  CalendarCheck,
  Filter,
  Heart,
  LogOut,
  MapPin,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Loader from "@/components/Loader";
import DoctorCard from "@/components/cards/DoctorCard";

const appointmentSchema = z.object({
  date: z.date({
    error: "Please select a date for your appointment.",
  }),
});
type AppointmentForm = z.infer<typeof appointmentSchema>;

const PatientDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Fetch specializations
  const { data: specializationsData } = useQuery({
    queryKey: ["specializations"],
    queryFn: async () => {
      const data = await axios(
        "https://appointment-manager-node.onrender.com/api/v1/specializations"
      );
      return data?.data?.data;
    },
  });

  // Fetch doctors
  const { data: doctorsData, isLoading: doctorsLoading } = useQuery({
    queryKey: ["doctors", currentPage, searchQuery, selectedSpecialization],
    queryFn: async () => {
      const data = await axios(
        `https://appointment-manager-node.onrender.com/api/v1/doctors?page=${currentPage}&limit=9&search=${searchQuery}&specialization=${selectedSpecialization}`
      );
      return data?.data?.data;
    },
  });

  const specializations = specializationsData || [];
  const doctors = doctorsData || [];

  // console.log(doctors);

  const onSubmit = (data: AppointmentForm) => {
    console.log(data);
  };

  const handleBookAppointment = (doctor: Doctor) => {
    console.log(doctor);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pt-32">
        <div className="container mx-auto p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">
                Welcome back, {"user?.name"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/patient/appointments">
                <Button className="flex items-center gap-2">
                  <CalendarCheck className="h-4 w-4" />
                  My Appointments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4" />
              <Input
                placeholder="Search doctors by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border border-gray-600/70"
              />
            </div>
            <div className="flex items-center gap-2">
              <Select
                value={selectedSpecialization}
                onValueChange={(value) => setSelectedSpecialization(value)}
              >
                <SelectTrigger className="w-full border border-gray-600/70">
                  <SelectValue placeholder="All Specializations" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800/70 text-white">
                  <SelectItem value=" ">All Specializations</SelectItem>
                  {specializations?.map((spec: string) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Doctors Grid */}
        {doctorsLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader />
          </div>
        ) : doctors.length === 0 ? (
          <Card className="text-center py-12 bg-gray-900/80 border border-gray-500/40 text-white">
            <CardContent>
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No doctors found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor: Doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                handleBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default PatientDashboard;
