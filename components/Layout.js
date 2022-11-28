import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import SideNavbar from './SideNavbar';

export default function Layout(props) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Head>
        <title>{props.title}</title>
      </Head>
      <SideNavbar />
      <div className=" flex-1 p-4">
        <Navbar />
        {props.children}
      </div>
    </div>
  );
}
