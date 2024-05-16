import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className={`${inter.className} ${space_grotesk.className} `}>
        <AuthProvider>
          <Navbar />
          {children}
          <ToastContainer autoClose={5000}></ToastContainer>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
