/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/lib/axiosInstance";
import { Appointment } from "@/types/types";
import { Avatar } from "@radix-ui/react-avatar";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  X,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Appointments = () => {
  const user = useAuth();

  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch user appointments
  const { data: userAppointmentsData, isLoading } = useQuery({
    queryKey: ["patient-appointments", statusFilter, currentPage],
    queryFn: async () => {
      const res = await axiosInstance(
        `/appointments/patient?status=${statusFilter}&page=${currentPage}`
      );
      console.log(res);
      return res;
    },
  });

  const appointments = userAppointmentsData?.data?.data || [];
  const totalPages = Math.max(
    1,
    Math.ceil((appointments?.data?.total || 0) / 9)
  );
  // console.log(appointments);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return <AlertCircle className="h-4 w-4" />;
      case "COMPLETED":
        return <CheckCircle className="h-4 w-4" />;
      case "CANCELLED":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (
    status: string
  ): "outline" | "secondary" | "destructive" => {
    switch (status) {
      case "PENDING":
        return "outline";
      case "COMPLETED":
        return "secondary";
      case "CANCELLED":
        return "destructive";
      default:
        return "outline";
    }
  };

  const handleCancelAppointment = (appointmentId: string) => {
    console.log(appointmentId);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pt-32">
        <div className="container mx-auto p-4 ">
          <div className="flex items-center justify-between space-x-4">
            <Link href="/patient/dashboard">
              <Button variant="link" size="sm" className="text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2 text-right">
              <div>
                <h1 className="text-xl font-bold">My Appointments</h1>
                <p className="text-muted-foreground text-sm">
                  Manage your scheduled appointments
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 ">
        {/* Filters */}
        <div className="mb-6">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[200px] border border-gray-600/70">
              <SelectValue placeholder="All Appointments" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-500 text-white">
              <SelectItem value=" ">All Appointments</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Appointments List */}
        {isLoading ? (
          <Loader />
        ) : appointments.length === 0 ? (
          <Card className="text-center bg-gray-900/10 border border-gray-700/70 text-white py-12">
            <CardContent>
              <Calendar className="h-12 w-12  mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                No appointments found
              </h3>
              <p className="text-muted-foreground mb-4">
                {statusFilter
                  ? `No ${statusFilter.toLowerCase()} appointments found.`
                  : "You haven't booked any appointments yet."}
              </p>
              <Link href="/patient/dashboard">
                <Button variant="outline" className="text-black">
                  Book Your First Appointment
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment: Appointment) => (
              <Card
                key={appointment.id}
                className="bg-gray-900/10 border border-gray-700/70 text-white group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={
                            appointment?.doctor.photo_url !== ""
                              ? appointment.doctor.photo_url
                              : `https://i.ibb.co.com/KX2TZyk/man.png`
                          }
                          alt={appointment?.doctor.name}
                        />
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          Dr. {appointment?.doctor.name}
                        </CardTitle>
                        <CardDescription>
                          {appointment?.doctor.specialization}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={getStatusVariant(appointment.status)}
                        className="flex items-center gap-2 text-white"
                      >
                        {getStatusIcon(appointment.status)}
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(parseISO(appointment?.date), "PPP")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Booked
                      </div>
                    </div>

                    {appointment?.status === "PENDING" && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm">
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-black">
                              Cancel Appointment
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to cancel your appointment
                              with Dr. {appointment.doctor.name} on{" "}
                              {format(parseISO(appointment.date), "PPP")}? This
                              action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-black">
                              Keep Appointment
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                handleCancelAppointment(appointment.id)
                              }
                              className="bg-destructive hover:bg-destructive/90"
                            >
                              Cancel Appointment
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages && totalPages >= 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Appointments;
