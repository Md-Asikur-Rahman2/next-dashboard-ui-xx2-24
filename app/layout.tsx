import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenuMain } from "./components/Navbar";



export const metadata: Metadata = {
  title: "Programming Language",
  description: "Generated by Programming Language",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><NavigationMenuMain/>{children}</body>
    </html>
  );
}
