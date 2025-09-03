/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Select } from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useState } from "react";

const DoctorDashboard = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch appointments
  // const { data: appointmentsData, isLoading } = useQuery({
  //   queryKey: ["doctor-appointments", statusFilter, dateFilter, currentPage],
  //   queryFn: async () => {
  //     const data = await axios(
  //       `https://appointment-manager-node.onrender.com/api/v1/appointments/doctor?status=${statusFilter}&date=${dateFilter}&page=${currentPage}`
  //     );
  //     console.log(data);
  //     return data;
  //   },
  // });

  // const appointments = appointmentsData?.data?.data || [];
  // console.log("APPOINTMENTS", appointments);

  // Get today's date  for the date input
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pt-32">
        <div className="container mx-auto p-4 text-white">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">
                Welcome back, DR. {"user?.name"}
              </h1>
            </div>
            {/* Filters */}
            <div className="">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full border border-gray-600/70 text-white">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">All Status</SelectItem>
                      <SelectItem value="PENDING">Pending</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                      <SelectItem value="CANCELLED">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="w-full border border-gray-600/70"
                    min={today}
                  />
                  {dateFilter && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDateFilter("")}
                      className="text-muted-foreground"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4"></div>
    </div>
  );
};

export default DoctorDashboard;
