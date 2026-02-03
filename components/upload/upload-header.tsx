import { UploadCloud } from "lucide-react";

const UploadHeader = () => {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
        <UploadCloud className="h-7 w-7 text-blue-600" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-900">
        Upload Document
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Upload your file and get an instant AI-powered summary
      </p>
    </div>
  );
};

export default UploadHeader;
