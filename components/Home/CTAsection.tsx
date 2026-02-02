"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTAsection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Take Your PDFs to the Next Level
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-lg mb-8">
          Upload your PDFs and get AI-generated summaries instantly — simple, fast, and accurate.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-red-500 text-white hover:bg-red-600 flex items-center gap-2 mx-auto"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Button>

        {/* Optional note */}
        <p className="mt-4 text-gray-500 text-sm">
          No credit card required • Instant access • 100% Secure
        </p>
      </div>
    </section>
  );
};

export default CTAsection;
