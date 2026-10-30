import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finisher Fitness | Coaching & Transformation Courses",
  description: "Personalized fitness coaching, pre-recorded tutorials, and 1-on-1 live mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
