"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$9",
    duration: "per month",
    features: [
      "Upload up to 10 PDFs",
      "AI-generated summaries",
      "Highlight key points",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    duration: "per month",
    features: [
      "Unlimited PDF uploads",
      "Advanced AI analysis",
      "Custom summary templates",
      "Priority support",
      "Collaboration tools",
    ],
    featured: true,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Pricing Plans
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`flex flex-col justify-between w-full max-w-sm p-8 rounded-2xl ${plan.featured
              ? "bg-red-50 border border-red-500"
              : "bg-gray-50 border border-gray-200"
              }`}
            style={{ minHeight: "450px" }} // ensures all cards are same height
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900 mb-6">
              {plan.price}{" "}
              <span className="text-base font-normal text-gray-500">
                /{plan.duration}
              </span>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-6 text-gray-700 text-left flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              size="lg"
              className={`w-full rounded-full font-medium ${plan.featured
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
            >
              {plan.featured ? "Get Pro" : "Get Basic"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
