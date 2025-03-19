import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yashwant | Portfolio",
  description: "A creative MERN Stack developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Margarine&family=Gluten:wght@100..900&display=swap"
        />
      </head>
      <body className={` antialiased full-body`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
