import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Mohamed Abdelrahman - m7md0a | Personal Portfolio",
  description: "Mohamed Abdelrahman is a Web Developer with 3 years of experience.",
  openGraph: {
    title: "Mohamed Abdelrahman | Personal Portfolio",
    description:
      "Mohamed Abdelrahman is a Web Developer with 3 years of experience.",
    url: `https://${process.env.domainName}`,
    siteName: "Rachid Ahsoune",
    images: [
      {
        url: `https://${process.env.domainName}/images/m7md0a.webp`,
        width: 800,
        height: 805,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <NextTopLoader color='#2563eb' />
        <Header />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
