'use client'
import localFont from "next/font/local";
import '@/app/ui/globals.css';
import Header from "@/app/ui/layout/Header";
import Footer from "@/app/ui/layout/Footer";
import { store } from '@/store/index';
import {Provider} from "react-redux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider store={store}>
          <div className={"pt-16"}>
              <Header/>
          </div>

                {children}

          <Footer/>
      </Provider>
      </body>
    </html>
  );
}
