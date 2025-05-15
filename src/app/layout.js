import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "@/contextAPI/context";
import Script from "next/script";
import AdSense from "@/components/AdSence";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

export const metadata = {
  title: "Insight Global Training Academy",
  description:
    "Internation Training and Human Capital Development Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap"
          rel="stylesheet"
        ></link>

        {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6672443632225136"
     crossorigin="anonymous"></Script> */}
        <AdSense pId="6672443632225136" />
      </head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TKXB4PVFST"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TKXB4PVFST');
  `}
      </Script>
      
      {/* <Script type="text/javascript" strategy="afterInteractive">
        {`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("1598158189");`}
      </Script> */}
      <body className={`${inter.className} ${space_grotesk.className} `}>
        <AppProvider>
          <AuthProvider>
            {/* <Navbar /> */}
            {children}
            <ToastContainer autoClose={5000}></ToastContainer>
            {/* <Footer /> */}
          </AuthProvider>
        </AppProvider>
      </body>
    </html>
  );
}
