"use client";

import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";

import { z } from "zod";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "file size must be 10 MB less"
    })
    .refine((file) => file.type.startsWith('application/pdf'), {
      message: "File must be PDF"
    })
})
const UploadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted")
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;
    const validatedField = schema.safeParse({ file })
    console.log(validatedField)
    if (!validatedField.success) {
      console.log(validatedField.error.flatten().fieldErrors.file?.[0] ?? "Invalid file")
      return;
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* File Upload */}
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">
        <FileText className="mb-2 h-8 w-8 text-gray-400" />

        <p className="text-sm font-medium text-gray-700">
          Click to upload or drag & drop
        </p>

        <p className="mt-1 text-xs text-gray-500">
          PDF (Max 10MB)
        </p>

        <Input type="file" className="hidden" id="file" accept="application/pdf" name="file" />
      </label>

      {/* Button */}
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Summarize
      </button>
    </form>
  );
};

export default UploadForm;
