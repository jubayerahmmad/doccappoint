"use client";

import { LogIn, Menu, UserPlus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <div className="flex items-center container mx-auto justify-between px-4 py-6 border border-gray-500 rounded-2xl mt-4 bg-transparent backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icon.png" alt="logo icon" height={50} width={50} />

          <span className="text-lg lg:text-2xl font-bold text-white">
            DocAppoint
          </span>
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/patient/dashboard">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-gray-300"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/doctor/dashboard">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-gray-300"
            >
              Dashboard
            </Button>
          </Link>
        </div>

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
        <div
          className={`md:hidden pb-4 px-4 bg-transparent backdrop-blur-md mt-4 border-t border-white/20`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            <Link href="/patient/dashboard">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-gray-300"
              >
                Dashboard
              </Button>
            </Link>
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-4 py-2 rounded-lg bg-black text-white`}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-4 py-2 rounded-lg bg-white text-primary`}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
