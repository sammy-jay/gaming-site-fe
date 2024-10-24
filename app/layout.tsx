"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Orbitron } from "next/font/google";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const orbitron = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mizuk | Online Multiplayer Gaming App</title>
        <meta
          name="description"
          content="It is an online multi-player gaming app. Have fun here!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${orbitron.className} w-full relative`}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
