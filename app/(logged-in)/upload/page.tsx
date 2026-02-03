"use client";

import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";
import React from "react";


const Page = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <UploadHeader />
        <UploadForm />
      </div>
    </div>
  );
};

export default Page;
