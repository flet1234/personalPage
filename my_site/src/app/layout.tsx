import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Maksim Gold personal site",
  description: "Maksim Gold personal site. Info, portfolio, contacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
      <body id="home" className="bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
