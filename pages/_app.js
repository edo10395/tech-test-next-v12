import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Bursaku.id</title>
      </Head>
      <Script src="../node_modules/flowbite/dist/flowbite.js" />

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
