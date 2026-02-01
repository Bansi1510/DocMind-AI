"use client";

import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import NavLink from "./Nav-link";


const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="w-full border-b bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-1">
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-base sm:text-xl font-semibold text-red-500 whitespace-nowrap"
          >
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
            <span>DocMind<span>-AI</span></span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/summaries">Your Summaries</NavLink>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            {isLoggedIn ? (
              <>
                <span className="text-sm font-medium text-green-600">Pro</span>
                <NavLink href="/upload">Upload PDF</NavLink>
              </>
            ) : (
              <NavLink href="/sign-in">Sign in</NavLink>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
