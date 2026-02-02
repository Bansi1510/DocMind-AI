"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const demoCards = [
  {
    title: "Upload PDF",
    desc: "Select your PDF file to start the summarization process instantly.",
  },
  {
    title: "AI Summaries",
    desc: "Get key insights and concise summaries of your documents instantly.",
  },
  {
    title: "Export & Save",
    desc: "Download your summaries or highlights to keep your notes organized.",
  },
  {
    title: "Highlight Key Points",
    desc: "Our AI automatically highlights the most important parts of your documents.",
  },
];

const DemoSection = () => {
  return (
    <section className="bg-gray-50 py-5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          See DocMind-AI in Action
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Upload your PDFs and let our AI generate smart summaries, highlight key insights, and save you hours of reading time.
        </p>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}  // Show 1 card at center
            centeredSlides={true} // Center the active card
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {demoCards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center text-center max-w-md mx-auto hover:shadow-2xl transition">
                  <FileText className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                  <Button size="sm" className="mt-6 gap-2 bg-red-500 hover:bg-red-600 text-white">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition z-10">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition z-10">
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
