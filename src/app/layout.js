import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import WhatsAppButton from "@/components/WhatsAppButton";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "---font-jetbrainsMono",
});

export const metadata = {
  title: "CVK Sir | Premier Chemistry Mentor for IIT-JEE & NEET",
  description:
    "Master Chemistry with Vikash Kumar (CVK Sir). B.Tech NIT Rourkela, Super 30 alumnus, with 10+ years of Kota coaching experience. 700+ JEE and 500+ NEET selections.",
  keywords: [
    "Chemistry mentor",
    "CVK Sir",
    "Vikash Kumar Chemistry",
    "JEE Mains Chemistry",
    "JEE Advanced Chemistry",
    "NEET Chemistry",
    "Kota Chemistry teacher",
    "Bhubaneswar Chemistry coaching",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <WhatsAppButton />
      </body>
    </html>
  );
}
