import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // routeChangeStart
    const handleStart = (url) => url !== router.asPath && setLoading(true);

    //routeChangeComplete
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return loading && <p>Loading...</p>;
}
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Bursaku.id</title>
      </Head>
      {/* <Script src="../node_modules/flowbite/dist/flowbite.js" /> */}
      {/* <Script src="../node_modules/flowbite/dist/flowbite.js" /> */}

      <SessionProvider session={session}>
        <>
          <Loading />
        </>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
