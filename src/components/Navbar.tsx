"use client";

import { LogIn, Menu, UserPlus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useAuth();

  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <div className="flex items-center container mx-auto justify-between p-4 border border-gray-500 rounded-2xl mt-4 bg-transparent backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icon.png" alt="logo icon" height={50} width={50} />

          <span className="text-lg lg:text-2xl font-bold text-white">
            DocAppoint
          </span>
        </Link>
        {/* Desktop */}

        {user && (
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={
                user.role === "DOCTOR"
                  ? "/doctor/dashboard"
                  : "/patient/dashboard"
              }
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-gray-300"
              >
                Dashboard
              </Button>
            </Link>
          </div>
        )}

        {!user && (
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/login">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-gray-300"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="sm"
                className="bg-white text-primary hover:bg-white/90 shadow-medium"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>
        )}

        {/* Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg text-white hover:bg-white/10`}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-lg p-4 space-y-4 rounded-xl mt-2 mx-4">
          {user && (
            <Link
              href={
                user.role === "DOCTOR"
                  ? "/doctor/dashboard"
                  : "/patient/dashboard"
              }
              className="block text-white"
            >
              Dashboard
            </Link>
          )}

          {!user && (
            <>
              <Link href="/login">
                <Button variant="ghost" className="w-full text-white">
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <UserPlus className="mr-2 h-4 w-4" /> Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
