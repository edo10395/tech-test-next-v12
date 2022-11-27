import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
