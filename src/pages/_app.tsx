import Logo from "@/assets/Logo";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon X Angelhack</title>
        <meta name="description" content="Data Visualization Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper pb-[3em] md:pb-[5em]">
       
        <Component {...pageProps} />
      </main>
    </>
  );
}
