import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyCta from "@/components/MobileStickyCta";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  metadataBase: new URL("https://cvksir.in"),
  title: {
    default: "Vikash Kumar (CVK Sir) | Premier Chemistry Mentor for IIT-JEE & NEET",
    template: "%s | CVK Sir Chemistry",
  },
  description:
    "Master Chemistry for JEE Mains, JEE Advanced & NEET UG with Vikash Kumar (CVK Sir). B.Tech NIT Rourkela, Super 30 alumnus, with 10+ years of Kota coaching excellence. 700+ JEE and 500+ NEET selections.",
  keywords: [
    "Chemistry mentor",
    "CVK Sir",
    "Vikash Kumar Chemistry",
    "Kota Chemistry teacher",
    "IIT JEE Chemistry coaching",
    "NEET Chemistry 180 score",
    "Chemistry coaching Bhubaneswar",
    "Organic Chemistry Kota shortcuts",
    "Physical Chemistry numerical tricks",
    "Inorganic Chemistry NCERT line by line",
  ],
  authors: [{ name: "Vikash Kumar (CVK Sir)", url: "https://cvksir.in" }],
  creator: "Vikash Kumar",
  publisher: "CVK Sir Chemistry Mentorship",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cvksir.in",
    siteName: "CVK Sir Chemistry Mentorship",
    title: "Vikash Kumar (CVK Sir) | Elite Chemistry Mentor for IIT-JEE & NEET",
    description:
      "Kota's proven 3-pillar methodology: visual reaction mechanisms, 45-second numerical algorithms, and 100% NCERT Inorganic precision. Guided 700+ JEE and 500+ NEET selections.",
    images: [
      {
        url: "/assets/photo.png",
        width: 800,
        height: 800,
        alt: "Vikash Kumar (CVK Sir) - Chemistry Mentor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Kumar (CVK Sir) | Premier Chemistry Mentor",
    description:
      "Master Chemistry with B.Tech NIT Rourkela & Super 30 alumnus Vikash Kumar. 10+ years of Kota teaching excellence.",
    images: ["/assets/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikash Kumar",
    alternateName: ["CVK Sir", "Vikash Sir"],
    url: "https://cvksir.in",
    image: "https://cvksir.in/assets/photo.png",
    jobTitle: "Senior Chemistry Educator & Mentor",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "CVK Sir Chemistry Mentorship",
      url: "https://cvksir.in",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Technology (NIT) Rourkela",
      },
      {
        "@type": "EducationalOrganization",
        name: "Super 30",
      },
    ],
    knowsAbout: [
      "IIT-JEE Chemistry",
      "NEET UG Chemistry",
      "Organic Chemistry Mechanisms",
      "Physical Chemistry Numericals",
      "Inorganic Chemistry NCERT",
    ],
    sameAs: [
      "https://wa.me/918457876843",
      "https://testseries-nine.vercel.app/",
    ],
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CVK Sir Chemistry Mentorship",
    url: "https://cvksir.in",
    logo: "https://cvksir.in/assets/photo.png",
    description:
      "Premier IIT-JEE and NEET Chemistry coaching and career mentorship under Vikash Kumar (CVK Sir).",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 173, Prachi Enclave, Chandrasekharpur",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751016",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8457876843",
      contactType: "admissions and academic inquiries",
      availableLanguage: ["English", "Hindi", "Odia"],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-navy-900 text-slate-100 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <WhatsAppButton />
        <MobileStickyCta />
      </body>
    </html>
  );
}
