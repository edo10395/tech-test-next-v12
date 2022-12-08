import Head from "next/head";
import Script from "next/script";
import React from "react";
import Header from "./Header";
import SideNavbar from "./SideNavbar";

export default function Layout(props) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Head>
        <title>{props.title}</title>
      </Head>
      <SideNavbar />

      <div className=" flex-1 p-4">
        <Header />
        {props.children}
      </div>
    </div>
  );
}
