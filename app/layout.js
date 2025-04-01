import { Geist, Geist_Mono , Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Eastern Enfielders Sikkim MC",
  description: "Connecting passionate riders, fostering adventure, and creating lifelong memories since 2005.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} antialiased p-md`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
