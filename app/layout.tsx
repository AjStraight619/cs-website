import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Nav } from "@/components/navigation/nav";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "CS 210",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        className="!scroll-smooth"
        lang="en"
        suppressHydrationWarning={true}
      >
        <head />
        <body
          className={cn(
            `${poppins.variable} ${inter.className} min-h-screen bg-background antialiased mt-16 p-4`
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <BackButton />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
