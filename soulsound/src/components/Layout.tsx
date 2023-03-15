import React from "react";
import Navbar from "./Navbar/Navbar";
import Head from "next/head";
import Footer from "./Footer/Footer";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Head>
        <title>Soulsound</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
