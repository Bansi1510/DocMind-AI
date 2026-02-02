"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, UploadCloud } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-white">
      {/* Background glow for AI vibe */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-75 w-75 rounded-full bg-red-500/20 blur-3xl -mt-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-center">
        {/* Badge */}
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-red-500" />
          AI-Powered PDF Intelligence
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Welcome to <span className="text-red-500">DocMind-AI</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
          Upload your PDFs and let our AI instantly generate smart summaries, highlight key insights,
          and save you hours of reading time.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2 bg-red-500 hover:bg-red-600 text-white">
            <UploadCloud className="h-5 w-5" />
            Upload PDF
          </Button>

          <Button size="lg" variant="outline" className="gap-2 border-red-500 text-red-500 hover:bg-red-50">
            <FileText className="h-5 w-5" />
            View Sample Summaries
          </Button>
        </div>

        {/* Trust / Security line */}
        <p className="mt-4 text-sm text-muted-foreground">
          Fast, Secure, No credit card required
        </p>
      </div>
    </section>
  );
};

export default HeroSection;