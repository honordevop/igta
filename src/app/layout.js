import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "@/contextAPI/context";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

export const metadata = {
  title: "Insight Global Training Academy",
  description:
    "International Training and Human Capital Development Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Google AdSense Verification Script */}
        {/* <Script
          id="adsense"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6672443632225136"
          crossOrigin="anonymous"
        /> */}

        {/* ✅ Google Analytics */}
        <Script
          id="gtag-js"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TKXB4PVFST"
        />
        <Script id="gtag-config" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TKXB4PVFST');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${space_grotesk.className}`}>
        <AppProvider>
          <AuthProvider>
            {/* Uncomment when ready */}
            {/* <Navbar /> */}
            {children}
            <ToastContainer autoClose={5000} />
            {/* <Footer /> */}
          </AuthProvider>
        </AppProvider>
      </body>
    </html>
  );
}
