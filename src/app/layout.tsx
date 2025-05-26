import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopBar from "./_components/topbar/page";
import NavBar from "./_components/navbar/page";
import Footer from "./_components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasser Hussein",
  description: "Front-End Developer",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png"
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-bgMain`}>
          <TopBar/>
          <NavBar/>
          <div className="wrapper min-h-[77.1vh] lg:min-h-[91vh] pt-16  xl:pt-0 flex items-center justify-center">
            {children}
          </div>
          <Footer/>
      </body>
    </html>
  );
}
