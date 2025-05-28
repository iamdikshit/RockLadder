import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/section/header/Header";
import Footer from "@/components/section/footer/Footer";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cyber Security",
  description: "Cyber Security",
};

export default function RootLayout({ children }) {
  return (
    <html className="overflow-y-scroll" lang="en">
      <body className={`${inter.className} $ antialiased overflow-hidden`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
