import React from "react";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Layout } from "../components";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
