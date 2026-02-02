"use client";

import React from "react";
import { Upload, Brain, FileText } from "lucide-react";

const steps = [
  {
    title: "Upload PDF",
    description:
      "Upload your PDF document securely to start the summarization process.",
    icon: Upload,
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "AI Analysis",
    description:
      "Our AI analyzes the content, understands context, and extracts key insights.",
    icon: Brain,
    color: "bg-green-100 text-green-500",
  },
  {
    title: "Get Summary",
    description:
      "Receive a clean, easy-to-read summary and highlights in seconds.",
    icon: FileText,
    color: "bg-purple-100 text-purple-500",
  },
];

const HowItWork = () => {
  return (
    <section className="bg-gray-50 flex justify-center m-0 p-0">
      <div className="max-w-6xl w-full text-center m-0 p-0 py-2">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">How It Works</h2>
        <p className="text-gray-500 mb-2">
          Turn long PDFs into clear summaries in just three simple steps.
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-1 px-1 max-w-xs">
                {/* Icon */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${step.color}`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-0.5">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
