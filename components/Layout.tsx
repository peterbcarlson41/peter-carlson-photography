import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  isHome?: boolean;
  social?: {
    instagram?: string;
    twitter?: string;
    email?: string;
  };
};

const Layout = ({
  children,
  title = "Peter Carlson Photography",
  description = "capturing unique moments in life",
  isHome = false,
  social,
}: Props) => (
  <div>
    <Head>
      <title>
        {isHome
          ? "Peter Carlson Photography"
          : `${title} | Peter Carlson Photography`}
      </title>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" sizes="57x57" href="/film-camera.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/film-camera.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    {children}
  </div>
);

export default Layout;
