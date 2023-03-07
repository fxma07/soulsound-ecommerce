import React from "react";
import "../styles/tailwind.css";
import { Poppins } from "next/font/google";
import { Layout } from "../components";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globlaStyles";
import { StateContext } from "../../context/StateContext";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={`${poppins.variable} font-sans`}>
        <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </main>
    </>
  );
}
