import type { Metadata } from "next";
import "./globals.css";


// For Components
import ParentWrapper from "@/Components/parentWrapper/parentWrapper";

// For Layout Components
import { Navbar } from "./Layout/Navbar/Navbar";
import { Footer } from "./Layout/Footer/Footer";


export const metadata: Metadata = {
  title: "Easy Games",
  description: "Where Every Shot Counts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParentWrapper>
          <Navbar />
          {children}
          <Footer />
        </ParentWrapper>
      </body>
    </html>
  );
}
