import type { Metadata } from "next";
import { Source_Sans_3 as Font } from 'next/font/google';
import "./globals.css";

const sourceSans3 = Font({
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap',   // Ensures text is visible while the font loads
  variable: '--font-source-sans-3', // Optional: Define a CSS variable
  weight: ['400', '700'], // Optional: Specify only the weights you use
});

export const metadata: Metadata = {
  title: "DocMind AI",
  description: "DocMind AI is an AI-driven document intelligence platform designed to help users understand long documents faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.className} `}
      >
        {children}
      </body>
    </html>
  );
}
