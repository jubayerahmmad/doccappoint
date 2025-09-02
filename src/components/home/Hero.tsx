"use client";

import { LogIn, Search, UserPlus } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Modern Healthcare
          <br />
          <span className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500/70 bg-clip-text text-transparent">
            Appointment Management
          </span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Streamline your healthcare experience with our intuitive appointment
          booking system. Connect patients with doctors seamlessly.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 border-4 bg-red-700" />
              <Input
                type="text"
                placeholder="Search doctors by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-large focus:shadow-xl transition-all duration-300"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:shadow-medium"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </form>
          <p className="text-white/70 text-sm mt-2">
            Find healthcare professionals near you
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" className="text-lg">
              <UserPlus className="h-5 w-5 mr-2" />
              Join DocAppoint
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="text-lg text-black">
              <LogIn className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
